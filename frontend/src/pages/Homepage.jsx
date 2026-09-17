import React from "react";
import profileImg from "../assets/profile.jpeg";

export default function Homepage() {
  return (
    <>
      <header className="p-4 bg-pink-200/10 gap-8 lg:flex sm:grid sm:grid-rows-3 [&>div]:flex">
        <img
          width={300}
          className="rounded-full"
          src={profileImg}
          alt="Mi foto de perfil"
        />
        {/* implementar grid */}
        <div className="grid">
          <div className="flex-col text-left">
            <h1>Jaime Canay Agho</h1>
            <h3 className="uppercase">Desarrollador de software</h3>
          </div>
          <button className="ml-auto">Español</button>
        </div>
      </header>
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
