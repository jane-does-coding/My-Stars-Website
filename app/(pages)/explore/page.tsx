const ExplorePage = () => {
	return (
		<div className="bg-neutral-600 h-screen w-full flex items-center justify-center">
			<img
				src="/imgs/bg.png"
				className="w-full h-screen object-cover fixed z-0 opacity-30 blur-[1px]"
				alt=""
			/>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					Explore
				</h1>
				<div className="mt-[2vh] grid grid-cols-2 gap-[1vw] w-[65vw] mx-auto">
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Github
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Youtube
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Instagram
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Slack
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Email
					</h1>
					<h1 className="text-[5vh] py-[0.5vh] bg-[#FCFAF4] w-full border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
						Resume
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

export default ExplorePage;
