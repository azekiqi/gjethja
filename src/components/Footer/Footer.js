import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"

function Footer() {
    return(
            <FooterContainer className="footer">
                <div className="footer-middle">
             <div className="container-footer">
             <div className="row">
                {/* Column 1 */}
            <div className="footer-column1">
                <h5>Na kontaktoni:</h5>
                 <ul className="list-unstyled">
                     <li>10000 Prishtina Kosovo</li>
                     <li>+383 (0)44</li>
                     <li>katrasolutions@gmail.com</li>
                 </ul>
            </div>
                {/* Column 2 */}
                <div className="footer-column2">
                    <h5>Rrjetet Sociale:</h5>
                    <ul className="list-unstyled">
                        <li><a href="https://www.instagram.com/katrasolutions/"> Instagram</a></li>
                        <li><a href="/"> Facebook</a></li>
                        <li><a href="https://www.linkedin.com/company/katra-solutions"> Linkedin</a></li>
                    </ul>
                </div>
                </div>
            </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                       {new Date().getFullYear()} Gjethja - All Rights Reserved
                    </p>
                    </div>
                </div>
            </FooterContainer>
    )
}
export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: #F1F1F1;
        padding-top: 2rem;
        padding-left: 5rem;
        color: var(--lightwhite);
        border-top: 3px solid #249278;
    }
    .footer-column2{
        margin: 0.5rem auto 0;
        margin-right: 5rem;
    }
    .footer-bottom {
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-left: 32rem;
    }
    ul li{
        line-height: 2
    }
    ul li a{
        color: #249278;
        line-height: 2
    }
    ul li a hover{
        
    }
    
`;