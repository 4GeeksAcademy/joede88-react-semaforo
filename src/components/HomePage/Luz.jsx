

const Luz = ({ colorMap, stateFunction, activeColor }) => {
    const colorSeleccionado = colorMap === activeColor;
    console.log(colorMap);

    return (
        <div className="luz" style={{ width: "200px", height: "200px", borderRadius: "50%", background: colorMap, opacity: colorSeleccionado ? "1" : "0.3" }} onClick={() => stateFunction(colorMap)}></div>
    )
}

export default Luz