import React from 'react';
import { Link } from 'react-router-dom';

import listeprojet from '@/Assets/Api/projetgallery.json';
import Card from '@/Components/card/Card.jsx';

import "./home.css";

const Home = () => {

    return (
        <main>
            <section className="homepage">
                <div className='displaycontainerpresentation'>
                    <div className='containerpresentation'>
                        <h1>QUI EST SAMUEL HERREA ?</h1>
                        <p>
                            je suis un Développeur passionné dans le domaine du web depuis plus de 6 ans,
                            actuellement Intégrateur web.<br />
                            Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
                        </p>
                    </div>
                </div>
                <div className='containerprojet'>
                    <h2 className='containerprojettitle'>Mes projet réalisé</h2>
                    <ul className='liste-projet'>
                        {
                            listeprojet.map(projet => {
                                return (
                                    <Card key={projet.id} id={projet.id} cover={projet.cover} title={projet.title} />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='displaycontainercontact'>
                    <div className='containercontact'>
                        <h2>Travaillons ensemble</h2>
                        <p className='contactparagraphe'>Nous sommes toujours à la recherche de nouvelles opportunités et nous travaillons volontiers à l’international. N’hésitez pas à prendre contact avec nous.
                            <br />L’un de nos chefs de projet reviendra vers vous pour commencer le processus de proposition.
                        </p>
                        <Link className='containercontactbutton' to="/Contact">Nous contacter</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;