import lock from "../images/Lock.svg"
function PrivacyPolicy() {
    return (
        <>
            <section className="privacy">
                <section className="privacyPolicy">
                    <h2>Privacy Policy and <span className="text--primary">Terms</span></h2>
                    <span>Last updated on September 12, 2023</span>
                    <p>
                        Below are our privacy & policy, which outline a
                        lot of goodies. it’s our aim to always take of our
                        participant
                    </p>

                    <section className="privacyPolicy__policy" style={{
                        borderRadius: "0.3125rem",
                        border: "1px solid #D434FE",
                        background: 'rgba(217, 217, 217, 0.03)',
                    }}>
                        <p>
                            At getlinked tech Hackathon 1.0, we
                            value your privacy and are committed
                            to protecting your personal information.
                            This Privacy Policy outlines how we collect,
                            use, disclose, and safeguard your data
                            when you participate in our tech hackathon
                            event. By participating in our event, you
                            consent to the practices described in this
                            policy.
                        </p>

                        <h3 className="text--primary">
                            Licensing Policy
                        </h3>
                        <h3>Here are terms of our Standard License:</h3>

                        <ul>
                            <li>
                                The Standard License grants you a
                                non-exclusive right to navigate and
                                register for our event
                            </li>
                            <li>
                                You are licensed to use the item
                                available at any free source sites, for
                                your project developement
                            </li>
                        </ul>

                        <button className="button-gradient">Read More</button>
                    </section>
                </section>
                <section className="privacyLock">
                    <img src={lock} alt="lock"/>
                </section>
            </section>
        </>
    );
}

export default PrivacyPolicy;