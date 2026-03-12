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
					Lorem, ipsum.
				</h2>
				<p className="text-[3.75vh] text-center">04/09/26</p>
				<img
					src="/imgs/line1.png"
					className="w-full translate-y-[-6vh]"
					alt=""
				/>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[-3vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
					similique porro beatae repudiandae voluptatem numquam nam laborum
					repellat quis, at quidem fugiat, fugit, explicabo maiores impedit
					omnis. Ad facere ducimus quo voluptates assumenda vero dolor iste,
					accusamus eum perferendis at deleniti quibusdam officia, ipsa nihil a
					placeat. Sequi, iusto cupiditate!
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
					sit ut? Nihil ex quam qui nemo non. Molestias odit ab aperiam quaerat?
					Ad blanditiis eaque repellat quisquam nobis ipsam, eveniet corrupti
					quidem quibusdam consequuntur perspiciatis non cum aliquid eos placeat
					explicabo facere architecto, perferendis possimus autem tempore
					aliquam aperiam tempora maiores. Quaerat, quas? Ipsa voluptatibus
					veniam accusantium consequatur culpa odio incidunt consequuntur ea
					reprehenderit illum nemo repellendus iure minima velit neque error
					inventore, dicta quasi! Quidem cupiditate omnis voluptas mollitia
					fugit impedit similique tenetur, expedita illum debitis et sit autem
					corporis est eum. Quibusdam obcaecati minima totam nam natus eveniet!
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					suscipit id, vel veniam incidunt porro voluptatibus voluptate?
					Dignissimos distinctio atque, assumenda laudantium ex labore,
					laboriosam aliquam optio ratione odio in.
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					suscipit id, vel veniam incidunt porro voluptatibus voluptate?
					Dignissimos distinctio atque, assumenda laudantium ex labore,
					laboriosam aliquam optio ratione odio in. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Explicabo eum voluptatibus, placeat hic
					odit rem! Voluptate ipsa iure sed pariatur deleniti mollitia nemo
					nostrum possimus!
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					suscipit id, vel veniam incidunt porro voluptatibus voluptate?
					Dignissimos distinctio atque, assumenda laudantium ex labore,
					laboriosam aliquam optio ratione odio in.
				</p>
				<p className="px-[3vw] text-[3.5vh] leading-[3.25vh] mt-[3vh]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
					suscipit id, vel veniam incidunt porro voluptatibus voluptate?
					Dignissimos distinctio atque, assumenda laudantium ex labore,
					laboriosam aliquam optio ratione odio in. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Explicabo eum voluptatibus, placeat hic
					odit rem! Voluptate ipsa iure sed pariatur deleniti mollitia nemo
					nostrum possimus!
				</p>
				<img
					src="/imgs/line3.png"
					className="w-full translate-y-[-1vh]"
					alt=""
				/>
				<div className="flex items-center justify-between w-[50%] mx-auto mt-[4vh]">
					<a href="/" className="text-[4vh]">
						Github
					</a>
					<a href="/" className="text-[4vh]">
						Instagram
					</a>
					<a href="/" className="text-[4vh]">
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
