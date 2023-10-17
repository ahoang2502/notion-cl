import Image from "next/image";

const Hero = () => {
	return (
		<div className="flex flex-col items-center justify-center max-w-5xl ">
			<div className="flex items-center ">
				<div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px] ">
					{/* Light mode */}
					<Image
						src="/documents.png"
						alt="documents"
						fill
						className="object-contain dark:hidden"
					/>
					{/* Dark mode */}
					<Image
						src="/documents-dark.png"
						alt="documents"
						fill
						className="object-contain hidden dark:block"
					/>
				</div>

				<div className="relative h-[400px] w-[400px] hidden md:block">
					{/* Light mode */}
					<Image
						src="/reading.png"
						fill
						className="object-contain dark:hidden"
						alt="reading"
					/>
					{/* Dark mode */}
					<Image
						src="/reading-dark.png"
						fill
						className="object-contain hidden dark:block"
						alt="reading"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
