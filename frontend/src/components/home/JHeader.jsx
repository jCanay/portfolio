import { useStore } from "@nanostores/react";
import profileImg from "../../assets/profile.jpeg";
import LanguageButton from "../LanguageButton";
import { $aboutStore } from "../../context/aboutStore";
import { useAbout } from "../../hooks/useAbout";
import JSkeleton from "../JSkeleton";

export default function JHeader(params) {
  const { about, loading, error } = useAbout();

  return (
    <header className="relative p-4 bg-pink-200/10 gap-8 md:flex sm:grid sm:grid-rows-3 [&>div]:flex">
      <img
        className="pfp rounded-full"
        src={profileImg}
        alt="Mi foto de perfil"
      />
      <div className="flex flex-col text-left w-full">
        <h1 className="mr-10">Jaime Canay Agho</h1>
        {loading || error ? (
          <JSkeleton />
        ) : (
          <h3 className="uppercase">{about?.occupation.es}</h3>
        )}
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
      <LanguageButton />
    </header>
  );
}
