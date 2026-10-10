import { useStore } from "@nanostores/react";
import profileImg from "../../assets/profile.jpeg";
import LanguageButton from "../LanguageButton";
import { $aboutStore } from "../../context/aboutStore";
import { useAbout } from "../../hooks/useAbout";
import JSkeleton from "../JSkeleton";
import i18n from "../../config/i18n";
import JButton from "../JButton";
import { icons } from "../logos/icons";
import { Component } from "react";
import { useHref, useNavigate } from "react-router";

export default function JHeader(params) {
  const { about, loading, error } = useAbout();

  const handleExternalUrl = (url) => {
    window.location.href = url;
  };

  return (
    <header className="relative p-6 bg-blue-200/10 gap-8 md:flex sm:grid sm:grid-rows-3 [&>div]:flex rounded-lg">
      <img
        className="pfp rounded-full"
        src={profileImg}
        alt="Mi foto de perfil"
      />
      <div className="flex flex-col text-left w-full">
        <h1 className="mr-10">Jaime Canay Agho</h1>
        {loading || error ? (
          <JSkeleton w="50%" h="1.5rem" />
        ) : (
          <h3 className="uppercase italic">
            {about?.occupation[i18n.language]}
          </h3>
        )}
        <ul className="flex mt-auto gap-3">
          {loading || error
            ? Array.from({ length: 2 }, (_, i) => (
                <JSkeleton w="7.5rem" h="2.5rem" radius="100rem" key={i} />
              ))
            : about?.media.map((e, i) => {
                const IconComponent = icons[e.icon];

                return (
                  <li key={i}>
                    <JButton
                      onClick={() =>
                        e.url && window.open(e.url, "_blank").focus()
                      }
                      className={"px-3 py-2 gap-2 flex items-center"}
                    >
                      {IconComponent && <IconComponent className={""} />}
                      {/* <GitHub className={"flex w-5 aspect-square"} /> */}
                      {e.name}
                    </JButton>
                  </li>
                );
              })}
        </ul>
      </div>
      <LanguageButton />
    </header>
  );
}
