export const Project = ({project}) => {
    const {name, img, description, github, hosted}= project;
  return (
    <div className="project">
        <div>
            <h3>{name}</h3>
            <p>
            Cuando vi a Stephanie sabia que era para mi, una mujer intelijente, divertida y hermosa. De esas mujeres que intimidan y no sabia si acercarme o no. Pero me atreví y desde ese día hicimos click. Quiero seguir a su lado todos los dias de mi vida... y que ni la muerte nos separe mi hermosa Stephanie porque nos queda mucho por recorrer juntos. A nuestros familiares y amigos los invito que nos acompañen y celebren con nosotros este día tan especial
 </p>
 <br />
 <br />
                <a target="_blank" rel="noreferrer" href={github}>
                    Inicio 3:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Boda 4:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Comida 5:00 P.M.
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    Grupo Musical 6:00 P.M.
                </a>

        </div>
    </div>
  )
}
