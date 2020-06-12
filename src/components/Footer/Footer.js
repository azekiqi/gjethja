import React from "react";
import styled from "styled-components"
import './Footer.scss'

function Footer() {
    return(
        <div>
        <div className="footer">
            <div className="contact">
                <p className="paragraph">Na kontaktoni:</p>
                <p className="p">10000 Pristina, Kosovo</p>
                <p className="p">+ 383 (0)44 111 111</p>
                <p className="p">katrasolutions@gmail.com</p>
            </div>
            <div className="socialMedia">
                <p className="paragraph">Rrjetet Sociale:</p>
                <ul className="ul">
                    <li><a href="https://www.facebook.com/katrasolutions/">Facebook</a></li>
                    <li><a href="https://www.instagram.com/katrasolutions/">Instagram</a></li>
                    <li><a href="https://www.linkedin.com/company/katra-solutions">LinkedIn</a></li>
                </ul>
            </div>
        </div>
            <div className="copyrights">
                <p>2020 Gjethja - All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer;

