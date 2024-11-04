import React from "react";

function Projeto({title, description, link}){
    return(
        <div className = "projeto-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer"></a>
        </div>
    );
}

export default Projeto