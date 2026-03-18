export default function BlogsPage() {
	return (
		<div className="bg-neutral-600 h-screen w-full">
			<img
				src="/imgs/bg-doodles.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-0 opacity-50 blur-[1px]"
				alt=""
			/>

			<div className="w-[70vw] mx-auto bg-[#FCFAF4]/80 backdrop-blur-md h-screen fixed top-0 z-5 overflow-y-scroll left-[15vw] pt-[3vh] pb-[7.5vh]">
				<h2 className="text-[12.5vh] leading-[12.5vh] text-center">
					Why this Website?
				</h2>
				<p className="text-[3.75vh] text-center">04/09/26</p>
				<img
					src="/imgs/line1.png"
					className="w-full translate-y-[-6vh]"
					alt=""
				/>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[-3vh]">
					I'm making this website to test out Lapse, because I'm tired of so
					much programming and I want to do something fun. I also want to share
					my thoughts and ideas with the world. Plus, it's a great way to
					practice my web development skills and learn new things. So yeah,
					that's why I'm making this website.
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					I really want to get more into drawing, I feel like I ahve the ability
					to copy, but not to create new art. This website doesn't have too much
					art, just distorted text, lines, stars and swirls, but it is a first
					step to get there right? I want to be able to make cool digital art,
					for like stickers, but I do more traditional art. I love drawing
					architechture and I'm okay at it, like people who dont draw will be
					amazed, but for artists it's decent, I find it easy, becausae all of
					it is just lines, snd perspective.
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					I feel like this style and design for the website could have so much
					more potential than what it has, but I'm so burned out from
					programming, and just wanted to throw something together quickly with
					the art I have.
				</p>

				<img
					src="/imgs/line3.png"
					className="w-full translate-y-[-1vh]"
					alt=""
				/>
				<div className="flex items-center justify-between w-[50%] mx-auto mt-[4vh]">
					<a
						href="https://github.com/jane-does-coding/My-Stars-Website"
						className="text-[4vh]"
					>
						Github
					</a>
					<a
						href="https://www.instagram.com/i_am_jane_2008/"
						className="text-[4vh]"
					>
						Instagram
					</a>
					<a href="mailto:yevheniiasimaka@gmail.com" className="text-[4vh]">
						Email
					</a>
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
}
