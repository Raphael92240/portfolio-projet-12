import React from 'react';
// import axios from 'axios';
import './contact.css';

const Contact = () => {
    // const [formData, setFormData] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     object: '',
    //     message: '',
    // });

    // const handleInputChange = (event) => {
    //     const { id, value } = event.target;
    //     setFormData({ ...formData, [id]: value });
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios.post('/send-email', formData)
    //         .then((response) => {
    //             // Handle the response here (e.g., show success message)
    //         })
    //         .catch((error) => {
    //             // Handle any errors here
    //         });
    // };

    return (
        <main>
            <section className="contactpage">
                <div className="contactinformation">
                    <div className='descriptioncontactinfo'>
                        <h2>Travaillons ensemble</h2>
                        <p>Nous sommes toujours à la recherche de nouvelles opportunités et nous travaillons volontiers à l’international. N’hésitez pas à prendre contact avec nous.
                            <br />L’un de nos chefs de projet reviendra vers vous pour commencer le processus de proposition.
                        </p>
                    </div>
                    <div className='infopersonelcontactinfo'>
                        <p className='adressecontactinfo'>123 rue démo<br />Copenhague, Danemark</p>
                        <p className='contactinfo'>(555) 555-5555<br />e-mail@exemple.com</p>
                    </div>
                </div>
                <div className='formcontactpage'>
                    <form >
                        <div className='formnamedisplay'>
                            <div className='formdisplay inputname'>
                                <label htmlFor="firstname">Prénom :</label>
                                <input type="text" id="firstname" required />
                            </div>
                            <div className='formdisplay inputname'>
                                <label htmlFor="lasttname">Nom de famille :</label>
                                <input type="text" id="lasttname" required />
                            </div>
                        </div>
                        <div className='formdisplay'>
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className='formdisplay'>
                            <label htmlFor="object">Objet :</label>
                            <input id="object" required />
                        </div>
                        <div className='formdisplay'>
                            <label htmlFor="message">Message :</label>
                            <textarea id="message" required />
                        </div>
                        <button type="submit" className='buttoncontactpage'>Confirmer</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;