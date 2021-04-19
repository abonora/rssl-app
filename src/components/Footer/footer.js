import React from 'react';

const Footer = () => {
    return(
        <footer>
            <p>albertobonora.com &copy; {(new Date().getFullYear())}</p>
            <p>NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. &copy; NHL {(new Date().getFullYear())}. All Rights Reserved.</p>
        </footer>
    )
}

export default Footer;