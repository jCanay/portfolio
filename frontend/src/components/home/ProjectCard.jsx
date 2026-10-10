import restifyImg from "../../assets/landing.png";
import JChip from "../JChip";
import { icons } from "../logos/icons";
import css from "./ProjectCard.module.css";

export default function ProjectCard() {
  return (
    <article className={css.projectCard}>
      <header>
        <h3>Restify</h3>
      </header>
      <figure>
        <a href="">
          <img src={restifyImg} alt="" />
        </a>
      </figure>
      <section className="flex flex-col gap-3">
        <p>
          Gestor de restaurantes online y plataforma de reservas y pedidos para
          clientes.
        </p>
        <ul className="flex flex-wrap gap-2 ">
          <li>
            <JChip name={"ReactJS"} icon={icons.react} />
          </li>
          <li>
            <JChip name={"Spring Boot"} icon={icons.spring} />
          </li>
          <li>
            <JChip name={"MySQL"} icon={icons.mysql} />
          </li>
        </ul>
      </section>
    </article>
  );
}
