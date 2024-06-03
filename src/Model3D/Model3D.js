import React, { useState, useEffect }  from "react";
import "./Model3D.css";
import ModelViewer from "./ModelViewer";

const Model3D = () =>{
    return (
        <div className="Model3D">
                <ModelViewer
                    scale="1"
                    modelPath={`./PUMPEDiPHONE15PRO_ferfi.glb`}
                    />
        </div>
    );
}

export default Model3D;