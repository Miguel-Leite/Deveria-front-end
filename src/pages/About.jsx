import Navbar from "../components/navbar/Navbar"
import { Container } from 'reactstrap'
import Hero from "../components/hero/Hero"

export default function About() {
    return (
        <div>
            <Navbar />
            <Hero page="Sobre a devlesson" text="A Devaria Lesson é uma plataforma ipsum dolor sit amet consectetur adipisicing elit.  beatae ipsa ducimus excepturi rerum non quaerat."/>
        </div>
    )
}