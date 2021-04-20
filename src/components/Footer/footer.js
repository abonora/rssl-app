import React from 'react';
import './footer.scss';
const Footer = () => {
    return(
        <footer>
            <div className="footer-inner">
                <p>albertobonora.com &copy; {(new Date().getFullYear())}</p>
                <p>NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. &copy; NHL {(new Date().getFullYear())}. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;