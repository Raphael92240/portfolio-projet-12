import React from 'react';
import './about.css';
import profile from '@/Assets/Images/dpsmarket.png';


const About = () => {
    return (
        <main>
            <section className="aboutpage">

                <div className='aboutme'>
                    <div className='aboutimage'>
                        <img className='aboutimagedisplay' src={profile} alt=" integrateur web samuel" />
                    </div>
                    <div className='aboutdescription'>
                        <h2>
                            À propos
                        </h2>
                        <p>
                            je suis un Développeur passionné dans le domaine du web depuis plus de 6 ans,
                            actuellement Intégrateur web.<br />
                            Je conçois et réalise des sites web du cahier des charges à la mise en ligne.
                        </p>
                    </div>
                </div>

                <div className='aboutcompetence'>
                    <h2>Mes compétences</h2>
                    <ul className='competencelist'>
                        <li>HTML5/CSS</li>
                        <li>javascript</li>
                        <li>react</li>
                        <li>bootstrap</li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default About;