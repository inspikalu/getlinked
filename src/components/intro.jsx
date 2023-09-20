import bigIdea from "../images/The big idea@2x.png"

function Intro() {
    return <>
        <section className="intro">
            <img src={bigIdea} alt="Big Light bulb" className='bigIdea'/>
            <section className="text">
                <h2>
                    Introduction to getlinked <br/> <span className="text--primary">techHackathon 1.0</span>
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
}

export default Intro;