import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Filter from "../components/filter/Filter";

export default function Course() {
  return (
    <div>
      <Navbar />
      <Hero
        page="cursos disponiveis"
        text="Todos os cursos de qualidade gratuito, que a devlesson trás para vocè 
            Vitae debitis maxime unde suscipit beatae ipsa ducimus excepturi rerum non quaerat."
      />
      <Filter title="Cursos disponiveis" />
    </div>
  );
}
