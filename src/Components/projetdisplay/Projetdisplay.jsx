import React from 'react';
import './Projetdisplay.css';

const Projetdisplay = ({ image, description, view }) => {
    console.log(image)
    console.log(description)
    console.log(view)

    if (view === "dev") return (
        <div className="projetdisplay infoprojet">
            <div className='projetdisplayimageconaatiner'>

                <img src={"http://localhost:3000/Images/" + image} className='projetdisplayimage' alt=''>
                </img>
            </div>
            <div className="projetdescriptif">

                <h3>
                    INFOS PROJET
                </h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
    console.log(description)


    let listcompetence = [];

    for (let i = 0; i < description.length; i++) {
        listcompetence.push(<li key={description[i]}>{description[i]}</li>)
    }

    if (view === "completed") return (
        <div className="projetdisplay infoprojetcomplete">
            <div className='projetdisplayimageconaatiner'>

                <img src={"http://localhost:3000/Images/" + image} className='projetdisplayimage' alt=''>
                </img>
            </div>
            <div className="completedreal">

                <h3>
                    RÉALISATION COMPLÈTE
                </h3>
                <ul className='listcompetence'>
                    {listcompetence}
                </ul>
            </div>
        </div>
    )
};


export default Projetdisplay;