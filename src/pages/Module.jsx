import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";
import Filter from "../components/filter/Filter";

export default function Module() {
  return (
    <div>
      <Navbar />
      <Hero
        page="Modulos dos cursos"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vitae debitis maxime unde suscipit beatae ipsa ducimus excepturi rerum non quaerat."
      />
      <Filter />
    </div>
  );
}
