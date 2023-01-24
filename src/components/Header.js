import Imagen from '../media/playaDos.jpg'


export const Header = ({ headerRef }) => {
    return (
        <div ref={headerRef} id="about">
            <br />
            <br />
            <div className=" header">

                <img src={Imagen} alt="mi foto" />
                <div>
                    <h2>Nosotros</h2>
                    <p>
                    Nos vamos a casar este año 2023 en (aun no tenemos fecha) a las 3pm. Queremos compartir con ustedes el día más especial de nuestra vida
                    <br />
                    <br />
                    LOS ESPERAMOS!.
                    <br />
                    </p>

                </div>
            </div>
        </div>
    )
}
