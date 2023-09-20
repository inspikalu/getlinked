import pinkLine from "../images/pink line.svg"
import chain from "../images/chain-9365116-7621444.svg"
import explosion from "../images/explosion.svg"
import manLookingAtVirtualScreen from "../images/man-wearing-smart-glasses-touching-virtual-screen 1.png"
import networkMesh from "../images/ball of mesh network.png"

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
                    Hackathon <span className="text--secondary">1.0</span>
                    <span>
                        <img src={chain} alt="Chain" className="chain"/>
                        <img src={explosion} alt="Explosion" className='explosion'/>
                    </span>
                </h2>
                <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <button className="button-gradient">Register</button>
                <section className="hero__Details__time">
                    <span className="hours">00</span>H
                    <span className="minutes">00</span>M
                    <span className="seconds">00</span>S
                </section>

            </section>

            <section className="hero__image">
                <img src={manLookingAtVirtualScreen} alt="Man Looking at virtual screen" className="man"/>
                <img src={networkMesh} alt="Network Mesh" className="networkMesh"/>

            </section>
        </section>
    </>
}

export default Hero;