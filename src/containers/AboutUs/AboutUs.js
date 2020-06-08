import React from 'react';
import Header from "../../components/Header/Header";
import "./AboutUs.scss";
import "../Home/Home.scss"
import Landingpage from "../Landingpage/Landingpage";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="aboutUs">
                    <h1 className="headings">ABOUT US</h1>
                    <p className="text">Ky web aplikacion është krijuar për të përmirësuar në mënyrë dramatike gjetjen e
                        shërbimeve shtëpiake përmes përdorimit të një platforme online.
                        Duke e marrë parasysh që deri më tani gjetja e këtyre shërbimeve nuk është e lehtë dhe nuk ka
                        ndonjë ofrues për gjetjen e tyre,
                        krijimi i një aplikacioni të tillë do të kursej kohën për përdoruesit.
                        Përdorimi i këtij website do të mundësoj gjetjen e shërbimeve të ndryshme siç janë:
                        kujdesi për femijë, kujdesi për të moshuarit, kujdesi për shtëpi dhe kujdesi për shtëpi dhe
                        kujdesi për kafshë.
                        Shërbime të cilat do të ofrohen nga personat me pasqyrë profesionale për këto lloj
                        shërbimesh. </p>
                </div>
                <div className="ourpartners">
                    OUR PARTNERS
                </div>
            </div>

        );
    }
}
export default AboutUs;
