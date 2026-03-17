const MyStuffPage = () => {
	return (
		<div className="bg-neutral-600 min-h-screen overflow-y-auto w-full flex flex-col items-center gap-[2vh] py-[2vh]">
			<img
				src="/imgs/bg-doodles.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-50 blur-[1px]"
				alt=""
			/>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					Stuff I do
				</h1>
			</div>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					Proyo
				</h1>
			</div>
			<div className="mx-auto z-5 relative grid grid-cols-3 gap-4 w-[65vw]">
				{" "}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, i) => (
					<div
						className="bg-[#FCFAF4] p-[1vh] border-dashed border-4 shadow-2xl"
						key={i}
					>
						<img
							src={`/imgs/proyo${img}.png`}
							className="w-full h-[27.5vh] object-cover"
							alt=""
						/>
					</div>
				))}
			</div>
			<div className="mx-auto z-5 relative flex flex-col">
				<h1 className="text-[7.5vh] bg-[#FCFAF4] w-[65vw] border-dashed border-4 shadow-2xl shadow-black/40 text-center mx-auto">
					Midnight
				</h1>
			</div>
			<div className="mx-auto z-5 relative grid grid-cols-3 gap-4 w-[65vw]">
				{" "}
				{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img, i) => (
					<div
						className="bg-[#FCFAF4] p-[1vh] border-dashed border-4 shadow-2xl"
						key={i}
					>
						<img
							src={`/imgs/midnight${img}.png`}
							className="w-full h-[27.5vh] object-cover"
							alt=""
						/>
					</div>
				))}
			</div>
			<img
				src="/imgs/profile.png"
				className="w-[25vw] object-cover fixed bottom-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<a href="/">
				<img
					src="/imgs/star.png"
					className="w-[10vw] hover:scale-105 object-cover fixed top-[2vh] left-[2vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
		</div>
	);
};

export default MyStuffPage;
