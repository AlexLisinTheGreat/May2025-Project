"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
	// Auto resize the text on the bottom of the homepage
	const transparentText = useRef<HTMLParagraphElement>(null);
	const [fontSize, setFontSize] = useState(16);

	useEffect(() => {
		const el = transparentText.current;

		const resizeToFit = () => {
			if (!el) return;

			const parentWidth = window.innerWidth;
			const text = el.textContent || "";
			if (!text) return;

			// Start large and shrink until it fits
			let testSize = 500;
			el.style.fontSize = `${testSize}px`;
			el.style.whiteSpace = "nowrap";

			while (el.scrollWidth > parentWidth && testSize > 1) {
				testSize -= 1;
				el.style.fontSize = `${testSize}px`;
			}

			setFontSize(testSize);
		};

		window.addEventListener("resize", resizeToFit);
		resizeToFit();

		return () => {
			window.removeEventListener("resize", resizeToFit);
		};
	}, []);

	return (
		<div className=" w-screen min-h-screen bg-bg text-primary font-lato font-bold">
			{/* Header  */}
			<div className="h-screen flex flex-col relative">
				<div className=" w-full h-24 p-8 flex flex-row justify-between items-center">
					<p className=" text-2xl">
						BLAKE & <br />
						KNEE
					</p>

					<div className=" flex flex-row gap-4 text-lg">
						<button>About</button>
						<button>Cases</button>
						<button>Team</button>
					</div>

					<button className=" bg-primary text-bg p-2 rounded-md font-bold hover:cursor-pointer">
						Consultation
					</button>
				</div>

				{/* Main Content */}

				<div className="w-full h-[calc(100%-96px)] p-16 flex flex-row justify-between">
					<div className="max-w-[800px] w-full  font-libre ">
						<div className="text-7xl leading-snug tracking-wider ">
							<div>
								{" "}
								QUALITY SEATTLE <br />{" "}
							</div>
							<p className="text-nowrap">LAW FIRM</p>
						</div>
						<p className=" w-3/5 font-normal tracking-wide">
							Seattle{"'"}s quality law firm, delivering
							professional, effective legal counsel at rates that
							respect your time, needs, and budget.
						</p>
					</div>

					<div className=" z-10 grow flex justify-center max-w-[800px]">
						<img
							style={{
								filter: "drop-shadow(5px 5px 5px #222)"
							}}
							src="/May2025-Project/LadyJustice.png"
							className=" h-full object-cover"
						/>
					</div>
				</div>

				{/* Transparent Text */}
				<div
					ref={transparentText}
					style={{
						fontSize: fontSize,
						maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)"
					}}
					className="transparent-text overflow-clip tracking-wider opacity-20 font-lato absolute bottom-0  w-full"
				>
					<p className=" text-nowrap -mb-8">BLAKE AND KNEE</p>
				</div>
			</div>
		</div>
	);
}
