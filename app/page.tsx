export default function Home() {
	return (
		<div className="bg-neutral-600 h-screen w-full">
			<img
				src="/imgs/bg.png"
				className="w-full h-screen object-cover fixed z-0 opacity-30 blur-[2px]"
				alt=""
			/>
			<a href="/goals">
				<img
					src="/imgs/goals.png"
					className="w-[35vw] object-cover absolute hover:scale-[102%] top-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
			<img
				src="/imgs/profile.png"
				className="w-[37.5vw] object-cover absolute hover:scale-[102%] bottom-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<img
				src="/imgs/jane-was-here.png"
				className="w-[40vw] object-cover absolute hover:scale-[102%] bottom-0 left-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<a href="/stuff-i-do">
				<img
					src="/imgs/stuff-i-do.png"
					className="w-[27.5vw] object-cover absolute hover:scale-105 top-[1vh] left-[32.5vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
			<a href="/blogs">
				<img
					src="/imgs/read.png"
					className="w-[28vw] object-cover absolute hover:scale-105 top-[70vh] left-[38vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
			<a href="/timeline">
				<img
					src="/imgs/timeline.png"
					className="w-[30vw] object-cover absolute hover:scale-105 top-[27vh] left-[20vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
					alt=""
				/>
			</a>
			<img
				src="/imgs/explore.png"
				className="w-[25vw] object-cover absolute hover:scale-105 top-[35vh] left-[55vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<img
				src="/imgs/star.png"
				className="w-[15vw] object-cover absolute hover:scale-105 top-[2.5vh] left-[10vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			<img
				src="/imgs/swirl.png"
				className="w-[15vw] object-cover absolute hover:scale-105 top-[35vh] left-[2.5vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
		</div>
	);
}
