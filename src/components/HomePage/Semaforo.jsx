import { Container } from "react-bootstrap"
import Luz from "./Luz"
import Boton from "./Boton"
import { useState } from "react"
import PurpleBoton from "./PurpleBoton"

const Semaforo = () => {
    let colores = ["red", "orange","green"]
    const [activeColor, setActive] = useState("")
    const [newColorArray,setNewColorArray] = useState(colores)
    return (
        <Container>
            <Boton stateFunction={setActive}  activeColor={activeColor} newColorArray={newColorArray}></Boton> 
            <PurpleBoton stateFunction={setNewColorArray} newColorArray={newColorArray} setActive={setActive} colores={colores}></PurpleBoton>           
            <div className="caja">
                {newColorArray.map((color, index) => (
                    <Luz key={index} colorMap={color} stateFunction={setActive} activeColor={activeColor}/>
                ))}
            </div>
        </Container>
    )

}

export default Semaforo