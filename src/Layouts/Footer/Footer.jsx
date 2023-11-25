import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <h3 className='titrefooter'>portfolio demo</h3>
            <div className='infopersonelfooter'>
                <p className='adressefooter'>123 rue démo<br />Copenhague, Danemark</p>
                <p className='contactfooter'>(555) 555-5555<br />e-mail@exemple.com</p>
            </div>
        </footer>
    );
};

export default Footer;