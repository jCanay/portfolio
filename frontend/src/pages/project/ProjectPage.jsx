import { useNavigate } from "react-router";

export default function ProjectPage() {
  const navigate = useNavigate();

  return (
    <header>
      <button onClick={() => navigate("/")}>Atrás</button>
      <h1>Projectos</h1>
    </header>
  );
}
