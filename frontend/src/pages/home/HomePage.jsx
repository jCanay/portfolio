import JButton from "../../components/JButton";
import "./homepage.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import i18n from "../../config/i18n";
import JHeader from "../../components/home/JHeader";
import JMainSection from "../../components/home/JMainSection";
import ProjectCard from "../../components/home/ProjectCard";
import AsideNav from "../../components/AsideNav";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { act, useEffect, useRef, useState } from "react";

export default function Homepage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const handleButtonChange = (e) => {
    const checked = e.target.checked;

    if (!checked) {
      window.scrollTo(0, 750);
    }

    setActive(checked);
  };

  return (
    <>
      <JHeader />
      <div className="flex mt-8 mb-8 gap-8">
        <AsideNav />
        <main className="bg-blue-200/10 p-6 flex flex-col gap-12 rounded-lg">
          <JMainSection
            titleId="about"
            title={t("links.about")}
            className="flex flex-col gap-4 text-left px-10 text-lg"
          >
            <p className="text-justify">
              Apasionado de la informática y la tecnología desde una edad
              temprana, considero este ámbito un pilar fundamental en mi
              desarrollo profesional y personal. Mi curiosidad e interés por la
              ingeniería y el aprendizaje continuo me llevan a investigar y
              adquirir de forma autónoma nuevas competencias de manera
              constante.
            </p>
            <p className="text-justify">
              Destaco por ser una persona analítica, orientada al detalle y con
              un alto estándar de calidad en todo lo que ejecuto. Me enfoco en
              la optimización de procesos para lograr la máxima eficiencia en
              cada tarea, buscando el dominio completo de las herramientas de
              trabajo para tener precisión y control sobre el desarrollo del
              proyecto.
            </p>
          </JMainSection>
          <JMainSection
            titleId="projects"
            title={t("links.projects")}
            className={`${styles.projectsSection} mt-4`}
          >
            {/* <JButton onClick={() => navigate("/projects")}>Proyectos</JButton> */}
            <ul className="grid grid-cols-2 relative gap-6">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </ul>
            <label
              role="checkbox"
              htmlFor="show-more"
              className="flex gap-2 items-center text-nowrap w-fit content-center px-3 py-2"
            >
              Mostrar {!active ? "más" : "menos"}
              <FontAwesomeIcon icon={faArrowDown} size="sm" />
            </label>
            <input
              checked={active}
              onChange={handleButtonChange}
              id="show-more"
              type="checkbox"
              className="hidden"
            />
          </JMainSection>
          <JMainSection
            titleId={"contact"}
            title={t("links.contact")}
            className="flex *:w-full"
          >
            <ul>
              <li></li>
              <li></li>
            </ul>
            <form action="" className="">
              <legend>Envía un email</legend>
              <label htmlFor="">Asunto</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Cuerpo</label>
              <textarea name="" id=""></textarea>
            </form>
          </JMainSection>
        </main>
      </div>
      <footer className="mt-auto">
        Hecho con amor - Jaime Canay Agho | 2026
      </footer>
    </>
  );
}
