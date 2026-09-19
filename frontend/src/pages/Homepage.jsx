import profileImg from "../assets/profile.jpeg";
import Button from "../components/Button";
import "./homepage.css";

export default function Homepage() {
	return (
		<>
			<header className="relative p-4 bg-pink-200/10 gap-8 md:flex sm:grid sm:grid-rows-3 [&>div]:flex">
				<img
					className="pfp rounded-full"
					src={profileImg}
					alt="Mi foto de perfil"
				/>
				<div className="flex flex-col text-left w-full">
					<h1 className="mr-10">Jaime Canay Agho</h1>
					<h3 className="uppercase">Desarrollador de software</h3>
					<ul className="flex mt-auto">
						<li>
							<button>Link</button>
						</li>
						<li>
							<button>Link</button>
						</li>
						<li>
							<button>Link</button>
						</li>
						<li>
							<button>Link</button>
						</li>
					</ul>
				</div>
				<Button className="absolute right-4">
					{/* aspect-8/7 h-20 */}
					{/* <span class="fi fi-es"></span> */}
					Cambiar idioma
				</Button>
			</header >
			<div>
				<aside></aside>
				<main>
					<article>
						<header>Sobre mí</header>
					</article>
				</main>
			</div>
			<footer className="mt-auto">
				Hecho con amor - Jaime Canay Agho | 2026
			</footer>
		</>
	);
}
