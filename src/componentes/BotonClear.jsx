import React from "react";
import '../css/BotonClear.css'

const BotonClear = (prosp) => (
    <div className="boton-clear"
    onClick={prosp.manejarClear}
    >
        {prosp.children}
    </div>
);

export default BotonClear;