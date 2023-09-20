import workPeople from "../images/workers.png";

const Judging = () => (
    <>
        <section className="judging">
            <img src={workPeople} alt="Two workers performing analysis" className='bigIdea'/>
            <section className="text">
                <h2>
                    Judging Criteria<br/> <span className="text--primary">Key attributes</span>
                </h2>
                <ul>
                    <li>
                        <span className="text--primary--dark">Innovation and Creativity: </span>Evaluate the uniqueness
                        and creativity of the solution. Consider whether it addresses a real-world problem in a novel
                        way or introduces innovative features.

                    </li>
                    <li>
                        <span className="text--primary--dark">Functionality: </span>Assess how well the solution works.
                        Does it perform its intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.

                    </li>
                    <li>
                        <span className="text--primary--dark">Impact and Relevance: </span>Determine the potential
                        impact of the solution in the real world. Does it address a significant problem, and is it
                        relevant to the target audience? Judges would assess the potential social, economic, or
                        environmental benefits.

                    </li>
                    <li>
                        <span className="text--primary--dark">Technical Complexity: </span>Evaluate the technical
                        sophistication of the solution. Judges would consider the complexity of the code, the use of
                        advanced technologies or algorithms, and the scalability of the solution.

                    </li>
                    <li>
                        <span className="text--primary--dark">Adherence to Hackathon Rules: </span>Judges will Ensure
                        that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of
                        specific technologies or APIs, and any
                        other competition-specific requirements.

                    </li>
                </ul>
                <button className='button-gradient'> Read More</button>
            </section>
        </section>
    </>
);

export default Judging;