import { Button } from "react-bootstrap"

const Boton = ({ stateFunction, activeColor, newColorArray }) => {
    const colorIndex = newColorArray.indexOf(activeColor)
    const indexColorNuevo = (colorIndex + 1) >= newColorArray.length ? 0 : colorIndex + 1;
    const colorNuevo = newColorArray[indexColorNuevo]

    return (
        <Button onClick={() => stateFunction(colorNuevo)}>Click here</Button>
    )
}

export default Boton