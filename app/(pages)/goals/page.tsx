const GoalsPage = () => {
	return (
		<div className="bg-neutral-600 h-screen w-full flex items-center justify-center ">
			<img
				src="/imgs/bg-doodles.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-50 blur-[1px]"
				alt=""
			/>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					2026 Goals
				</h1>
				<div className="mt-[2vh] grid grid-cols-2 gap-[1vw] w-[65vw] mx-auto">
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Hack Club 2026 Gap Year
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Move out
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Attend 4+ Hack Club Events
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-solid opacity-40 blur-[1.5px] border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Organize Campfire
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Get Drivers License
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-solid opacity-40 blur-[1.5px] border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Visit Vienna & Czech
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-solid opacity-40 blur-[1.5px] border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Go to Campfire Flagship
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Organize 2+ Hackathons
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Get a job
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Get 500 subscribers on Youtube
					</h1>
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

export default GoalsPage;
