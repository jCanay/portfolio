import { t } from "i18next";
import styles from "./AsideNav.module.css";

export default function AsideNav() {
  return (
    <aside
      className={`${styles.asideNav} bg-blue-200/10 p-4 self-start sticky top-8 rounded-lg`}
    >
      <ul className="flex flex-col text-nowrap gap-4 [&_a]:px-4 [&_a]:py-2 [&_li]:flex [&_a]:min-w-48">
        <li>
          <a href="#about">{t("links.about")}</a>
        </li>
        <li>
          <a href="#projects">{t("links.projects")}</a>
        </li>
        <li>
          <a href="#contact">{t("links.contact")}</a>
        </li>
      </ul>
    </aside>
  );
}
