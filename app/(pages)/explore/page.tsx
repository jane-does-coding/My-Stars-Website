"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const ExplorePage = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const router = useRouter();

	const playClick = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		}
	};

	const handleNav = (url: string) => {
		playClick();
		setTimeout(() => {
			router.push(url);
		}, 120);
	};

	return (
		<div className="bg-neutral-600 h-screen w-full flex items-center justify-center">
			<img
				src="/imgs/bg-doodles.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-40 blur-[2px]"
				alt=""
			/>
			<img
				src="/imgs/youtube.png"
				onClick={() => handleNav("https://www.youtube.com/@knowledge-drop111")}
				className="w-[37vw] object-cover absolute hover:scale-105 top-[5vh] left-[35vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/instagram.png"
				onClick={() => handleNav("https://www.instagram.com/i_am_jane_2008/")}
				className="w-[38vw] object-cover absolute hover:scale-105 top-[64vh] left-[53vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/github.png"
				onClick={() => handleNav("https://github.com/jane-does-coding")}
				className="w-[30vw] object-cover absolute hover:scale-105 top-[22vh] left-[5vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/slack.png"
				onClick={() =>
					handleNav("https://hackclub.enterprise.slack.com/team/U07873N68ET")
				}
				className="w-[25vw] object-cover absolute hover:scale-105 top-[18vh] left-[70vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/resume.png"
				onClick={() =>
					handleNav(
						"https://docs.google.com/document/d/1YG6hO2icW2iqnWbf-jyOyTfh6s4h3yPxNgd1Mx8rOes/edit?usp=sharing"
					)
				}
				className="w-[30vw] object-cover absolute hover:scale-105 top-[66vh] left-[16vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/gmail.png"
				onClick={() => handleNav("mailto:yevheniiasimaka@gmail.com")}
				className="w-[36vw] object-cover absolute hover:scale-105 top-[37vh] left-[35vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>
			{/* <div className="mx-auto z-5 relative flex flex-col">
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
			</div> */}
			{/* <img
				src="/imgs/profile.png"
				className="w-[25vw] object-cover absolute bottom-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/> */}
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
