import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProjetService } from '@/_Services/Projet.service';
import Projetdisplay from '@/Components/projetdisplay/Projetdisplay.jsx';

import './projet.css';

const Projet = () => {

    const [projet, setProjet] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getInfo();
    }, [])

    const getInfo = async () => {
        await ProjetService.getProjet(id)
            .then((data) => {
                if (data) {
                    console.log(data)
                    setProjet(data);
                    setIsLoading(false);
                } else {
                    navigate("/Home");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
    console.log(projet.projetfinish)
    console.log(projet.projetdev)
    console.log(projet.description)
    console.log(projet.projetfinishdescription)



    if (isLoading) return (<h3>Chargement...</h3>)


    return (
        <main>

            <section className="projet">
                <h2>{projet.title}</h2>
                <Projetdisplay image={projet.projetdev} description={projet.description} view="dev" />
                <Projetdisplay image={projet.projetfinish} description={projet.projetfinishdescription} view="completed" />

            </section>
        </main>
    );
};

export default Projet;