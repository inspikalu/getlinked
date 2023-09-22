import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebookF, faInstagram, faLinkedinIn, faXTwitter} from "@fortawesome/free-brands-svg-icons"
import {faLocation, faPhone} from "@fortawesome/free-solid-svg-icons"

function Footer() {
    return (
        <>
            <section className="footer">
                <section className="footer__heading">
                    <h2><a href="/">get<span className="bold text--primary">Linked</span></a></h2>
                    <p>
                        Getlinked Tech Hackathon is a technology
                        innovation program established by a group
                        of organizations with the aim of showcasing
                        young and talented individuals in the field
                        of technology
                    </p>
                    <div>
                        <span className="termsOfUse">Terms of Use</span>
                        Privacy Policy
                    </div>
                </section>
                <section className="footer__links">
                    <h2 className="text--primary">Useful Links</h2>
                    <ul>
                        <li>Overview</li>
                        <li>Timeline</li>
                        <li>FAQs</li>
                        <li>Register</li>
                    </ul>
                    <div className="followUs">
                        <h5 className="text--primary">Follow us</h5>
                        <div className="socialLinks">
                            <a target='_blank' rel="norefferer noreferrer"
                               href="https://www.instagram.com"><FontAwesomeIcon
                                icon={faInstagram} size='xl'/></a>
                            <a target='_blank' rel="norefferer noreferrer" href="https://www.x.com"><FontAwesomeIcon
                                icon={faXTwitter} size='xl'/></a>
                            <a target='_blank' rel="norefferer noreferrer"
                               href="https://www.facebook.com"><FontAwesomeIcon
                                icon={faFacebookF} size='xl'/></a>
                            <a target='_blank' rel="norefferer noreferrer"
                               href="https://www.linkedin.com"><FontAwesomeIcon
                                icon={faLinkedinIn} size='xl'/></a>
                        </div>
                    </div>
                </section>
                <section className="footer__contacts">
                    <h2 className="text--primary">Contact Us</h2>
                    <div><FontAwesomeIcon icon={faPhone}/><a href="tel:+2346707653444">+234 6707653444</a></div>
                    <div><FontAwesomeIcon icon={faLocation}/>
                        <span>
                <span>27, Alara Street</span>
                <span>Yaba 100012</span>
                <span>Lagos State</span>
                        </span>
                    </div>
                </section>
                <section className="footer__rights">
                    All rights reserved. &copy; getlinked Ltd.
                </section>
            </section>
        </>
    )
        ;
}

export default Footer;