import { FaArrowCircleUp } from "react-icons/fa";


export const NavBar = ({ExperienceClick,headerClick,
  homeClick,portfolioClick,contactClick}) => {



  return (
    <div id="about" className="navbar">
        <a href="/" onClick={homeClick}>Inicio</a>
        <a href="/" onClick={headerClick}>Nosotros</a>
        <a href="/" onClick={ExperienceClick}>Nuestra Historia</a>
        <a href="/" onClick={portfolioClick}>Itinerario</a>
        <a href="/" onClick={contactClick}>Boda</a>
        <a href="/" id="arrow" onClick={homeClick}><FaArrowCircleUp/></a>
    </div>
  )
}
