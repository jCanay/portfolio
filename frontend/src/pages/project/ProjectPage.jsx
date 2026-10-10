import { useNavigate } from "react-router";

export default function ProjectPage() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate("/#projects")}>Atrás</button>
      <h1>Restify</h1>
      <p>
        Restify es un proyecto enfocado en la gestión de restaurantes de manera
        online.
      </p>
    </header>
  );
}
