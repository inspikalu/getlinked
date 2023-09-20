import chain from "../images/chain-9365116-7621444.svg"
import explosion from "../images/explosion.svg"
import manWithGlasses from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
import virtualScreen from "../images/ball of mesh network.png"
import PinkLine from "../images/pink line.svg"
import Bulb from "../images/Bulb.png";
import Star from "../images/star.png"

function Hero() {
    return <>
        <div className="hero">
            <img src={Star} alt="Image of a star" className={'star one'}/>
            <img src={Star} alt="Image of a star" className={'star two'}/>
            <img src={Star} alt="Image of a star" className={'star three'}/>
            <div className="hero__text">
                <h2>Igniting a Revolution in HR Innovation<img src={PinkLine} alt="Pink Line"/></h2>

            </div>
            <div className="hero__details">
                <h2>getlinked Tech Hackathon <span>1.0</span> <img src={chain} alt="Chain Image"/> <img src={explosion}
                                                                                                        alt="Explosion image"/>
                    <img src={Bulb} alt="Light Bulb" className="bulb"/>

                </h2>
                <p>
                    Participate in getlinked tech Hackathon 2023 stand
                    a chance to win a Big prize
                </p>
                <button className={'button-gradient'}>Register</button>

                <div className="time">
                    <span className="hours">00</span>H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="minutes">00</span>M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="seconds">00</span>S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </div>
            </div>
            <div className="hero__image">
                <img src={manWithGlasses} alt="Man Wearing Glasses" className={'manWithGlasses'}/>
                <img src={virtualScreen} alt="Virtual Screen" className={'virtualScreen'}/>

            </div>
        </div>
    </>
}

export default Hero;