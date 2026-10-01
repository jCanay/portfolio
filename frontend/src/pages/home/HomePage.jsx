import Button from "../../components/Button";
import "./homepage.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import i18n from "../../config/i18n";
import JHeader from "../../components/home/JHeader";

export default function Homepage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <JHeader />
      <div className="flex mt-8 mb-8 gap-8">
        <aside className="bg-pink-200/10 p-4 self-start sticky top-8">
          <ul className="flex flex-col text-nowrap gap-4 [&_li]:active:bg-pink-200/50 [&_li]:hover:bg-pink-200/50 [&_li]:hover:text-black [&_a]:px-4 [&_a]:py-2 [&_li]:flex [&_a]:min-w-48">
            <li>
              <a href="#about">{t("links.about")}</a>
            </li>
            <li>
              <a href="#enooc">{t("links.projects")}</a>
            </li>
            <li>
              <a href="">{t("links.contact")}</a>
            </li>
          </ul>
        </aside>
        <main className="bg-pink-200/10 p-4">
          <article id="about">
            <header>{t("links.about")}</header>
            <p>
              Apasionado de la informática y la tecnología desde una edad
              temprana, considero este ámbito un pilar fundamental en mi
              desarrollo profesional y personal. Mi curiosidad e interés por la
              ingeniería y el aprendizaje continuo me llevan a investigar y
              adquirir de forma autónoma nuevas competencias de manera
              constante.
            </p>
            <p>
              Destaco por ser una persona analítica, orientada al detalle y con
              un alto estándar de calidad en todo lo que ejecuto. Me enfoco en
              la optimización de procesos para lograr la máxima eficiencia en
              cada tarea, buscando el dominio completo de las herramientas de
              trabajo para tener precisión y control sobre el desarrollo del
              proyecto.
            </p>
          </article>
          <article>
            <button onClick={() => navigate("/projects")}>Projectos</button>
          </article>
          {/* <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum nulla voluptate eligendi, sit quis.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            alias, perspiciatis ad sequi possimus provident praesentium itaque
            enim optio! Quibusdam eaque tempore dicta corrupti dolorum nulla
            voluptate eligendi, sit quis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Officia alias, perspiciatis ad sequi
            possimus provident praesentium itaque enim optio! Quibusdam eaque
            tempore dicta corrupti dolorum n∫ulla voluptate eligendi, sit quis.
          </article> */}
          <article id="enooc">Enoooc</article>
        </main>
      </div>
      <footer className="mt-auto">
        Hecho con amor - Jaime Canay Agho | 2026
      </footer>
    </>
  );
}
