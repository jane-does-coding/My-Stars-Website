"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
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
		<div className="bg-neutral-600 h-screen w-full" onClick={playClick}>
			<img
				src="/imgs/bg.png"
				className="w-full h-screen object-cover fixed z-0 opacity-30 blur-[2px]"
				alt=""
			/>

			<img
				src="/imgs/goals.png"
				onClick={() => handleNav("/goals")}
				className="w-[35vw] object-cover absolute hover:scale-[102%] top-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/profile.png"
				onClick={() => handleNav("/profile")}
				className="w-[37.5vw] object-cover absolute hover:scale-[102%] bottom-0 right-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/jane-was-here.png"
				className="w-[40vw] object-cover absolute hover:scale-[102%] bottom-0 left-0 drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/stuff-i-do.png"
				onClick={() => handleNav("/stuff-i-do")}
				className="w-[27.5vw] object-cover absolute hover:scale-105 top-[1vh] left-[32.5vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/read.png"
				onClick={() => handleNav("/blogs")}
				className="w-[28vw] object-cover absolute hover:scale-105 top-[70vh] left-[38vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/timeline.png"
				onClick={() => handleNav("/timeline")}
				className="w-[30vw] object-cover absolute hover:scale-105 top-[27vh] left-[20vw] drop-shadow-2xl drop-shadow-black/80 transition-all ease-in-out cursor-pointer z-10"
				alt=""
			/>

			<img
				src="/imgs/explore.png"
				onClick={() => handleNav("/explore")}
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

			<audio ref={audioRef} src="/sounds/mouse-click.mp3" preload="auto" />
		</div>
	);
}
