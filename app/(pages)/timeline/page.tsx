const TimelinePage = () => {
	return (
		<div className="bg-neutral-600 h-screen w-full flex items-center justify-center ">
			<img
				src="/imgs/bg-doodles.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-50 blur-[1px]"
				alt=""
			/>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					Timeline
				</h1>
				<div className="mt-[2vh] flex flex-col gap-[1vw] w-[65vw] mx-auto">
					<div className="flex w-full gap-[1vw]">
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-1/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							2019
						</h1>
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-4/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							Moving to the US from Ukraine
						</h1>
					</div>
					<div className="flex w-full gap-[1vw]">
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-1/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							2021
						</h1>
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-4/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							Moving Utah from Virginia
						</h1>
					</div>
					<div className="flex w-full gap-[1vw]">
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-1/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							2022
						</h1>
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-4/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							Started taking programming seriously
						</h1>
					</div>
					<div className="flex w-full gap-[1vw]">
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-1/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							2024
						</h1>
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-4/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							Won my first Hackathon
						</h1>
					</div>
					<div className="flex w-full gap-[1vw]">
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-1/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							2025
						</h1>
						<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-4/5 border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
							Went to Hack Club event in person
						</h1>
					</div>
				</div>
			</div>
			<img
				src="/imgs/profile.png"
				className="w-[25vw] object-cover absolute bottom-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<a href="/">
				<img
					src="/imgs/star.png"
					className="w-[10vw] hover:scale-105 object-cover absolute top-[2vh] left-[2vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
		</div>
	);
};

export default TimelinePage;
