import pinkLine from "../images/pink line.svg"
import chain from "../images/chain-9365116-7621444.svg"
import explosion from "../images/explosion.svg"
import manLookingAtVirtualScreen from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
import networkMesh from "../images/ball of mesh network.png"
import star from "../images/star.png"
import lightBulb from "../images/Bulb.png"

function Hero() {
    return <>
        <section className="hero">

            <section className="hero__Title">
                <h2>Igniting a Revolution in HR Innovation</h2>
                <img src={pinkLine} alt="" className="pinkLine"/>
            </section>

            <section className="hero__Details">
                <h2>
                    getlinked Tech
                    Hackathon <span className="text--primary">1.0</span>
                    <span>
                        <img src={chain} alt="Chain" className="chain"/>
                        <img src={explosion} alt="Explosion" className='explosion'/>
                    </span>
                    <img src={lightBulb} alt="lightbulb" className="lightBulb"/>
                </h2>
                <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <button className="button-gradient">Register</button>
                <section className="hero__Details__time">
                    <span className="hours">00</span>H &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="minutes">00</span>M&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="seconds">00</span>S&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </section>

            </section>

            <section className="hero__image">
                <img src={manLookingAtVirtualScreen} alt="Man Looking at virtual screen" className="man"/>
                <img src={networkMesh} alt="Network Mesh" className="networkMesh"/>

            </section>
            <section className="stars">
                <img src={star} alt="Decoration star" className="star1"/>
                <img src={star} alt="Decoration star" className="star2"/>
                <img src={star} alt="Decoration star" className="star3"/>
            </section>
        </section>
    </>
}

export default Hero;