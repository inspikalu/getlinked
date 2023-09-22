import LibertyAssured from "../images/sponsors/Liberty Assured.png"
import LibertyPay from "../images/sponsors/Liberty pay.png"
import WinWise from "../images/sponsors/Winwise.png"
import Whispersms from "../images/sponsors/Whispersms.png"
import PayBox from "../images/sponsors/Paybox.png"
import VuzualPlus from "../images/sponsors/Vuzual Plus.png"


function Partners() {
    return (<>
        <section className="partners">
            <h2>Partners and Sponsors</h2>
            <p>Getlinked hackathon 1.0 is honored to have the following major companies as its partners and
                sponsors </p>

            <section className="partners__container">
                <div className="libertyAssured">
                    <img src={LibertyAssured} alt=""/>
                </div>
                <div className="libertyPay">
                    <img src={LibertyPay} alt=""/>
                </div>
                <div className="winwise">
                    <img src={WinWise} alt=""/>
                </div>
                <div className="Whispersms">
                    <img src={Whispersms} alt=""/>
                </div>
                <div className="paybox">
                    <img src={PayBox} alt=""/>
                </div>
                <div className="vuzualPlus">
                    <img src={VuzualPlus} alt=""/>
                </div>
            </section>
        </section>
    </>)
}

export default Partners;