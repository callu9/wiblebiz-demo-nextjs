import Image from "next/image";

export default function Home() {
	return (
		<div className="container flex upper-lower gap-56">
			<div className="flex upper-lower gap-24" style={{ paddingTop: "36px" }}>
				<Image width={180} height={40} src="./next.svg" alt="Next.js logo" />
				<h2>Kia Wiblebiz Demo Project with Next.js</h2>
			</div>
			<p>This is Main Page.</p>
			<div className="flex upper-lower gap-16">
				<a
					className="text-active"
					href="https://github.com/callu9"
					style={{ textDecoration: "underline" }}>
					👤 Lee Sujeong Profile
				</a>
				<a
					className="text-active"
					href="https://github.com/callu9/wiblebiz-demo-nextjs"
					style={{ textDecoration: "underline" }}>
					📚 Github Repository
				</a>
			</div>
		</div>
	);
}
