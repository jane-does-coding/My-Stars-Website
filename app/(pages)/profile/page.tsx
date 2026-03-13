import React from "react";

const ProfilePage = () => {
	return (
		<div className="bg-neutral-600 h-screen w-full flex items-center justify-center">
			<img
				src="/imgs/profile-page.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-100"
				alt=""
			/>
			<p className="text-[5vh] fixed top-[35vh] right-[2.5vw]">9 Piercings</p>
			<p className="text-[5vh] fixed top-[45vh] right-[2.5vw]">17 years old</p>
			<p className="text-[5vh] fixed top-[55vh] right-[3.5vw]">14 Hackathons</p>
			<p className="text-[5vh] fixed top-[65vh] right-[3.5vw]">
				Love piercings btw
			</p>
			<p className="text-[5vh] fixed top-[75vh] right-[3.5vw]">
				Wanna do Youtube
			</p>
			<p className="text-[5vh] fixed top-[85vh] right-[3.5vw]">
				Did I mention piercings?
			</p>
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

export default ProfilePage;
