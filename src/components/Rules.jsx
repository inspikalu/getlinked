import illustratorGirl from "../images/illustrator-girl-sitting.png";

const Rules = () => (
    <>
        <section className="rules">
            <img src={illustratorGirl} alt="A girl Boss sitting" className='bigIdea'/>
            <section className="text">
                <h2>
                    Rules and<br/> <span className="text--primary">Guidelines</span>
                </h2>
                <p>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as
                    day: to shape the future. Whether you&apos;re
                    a coding genius, a design maverick, or a
                    concept wizard, you&apos;ll have the chance to transform your ideas into reality. Solving
                    real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world, that&apos;s what we&apos;re all
                    about!
                </p>
            </section>
        </section>
    </>
);

export default Rules;