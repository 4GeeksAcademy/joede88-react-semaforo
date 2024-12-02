import { Button } from "react-bootstrap"

const PurpleBoton = ({stateFunction,colores,newColorArray}) => {

    return (
        <Button onClick={()=>stateFunction([...colores,"purple"])} >Click to add purple</Button>
    )
}

export default PurpleBoton