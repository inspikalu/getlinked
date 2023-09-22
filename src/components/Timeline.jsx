function Timeline() {
    return (<>
        <section className="timeline">
            <h2>Timeline</h2>
            <p>
                Here is the breakdown of the time we
                anticipate using for the upcoming event.
            </p>
            <section className="timeline__container">
                <div className="container left">
                    <div className="content">
                        <h2>Hackathon Announcement</h2>
                        <p>
                            The getlinked tech hackathon 1.0 is formally announced
                            to the general public and teams begin to get ready to register
                        </p>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                        <h2>Team Registerations Begin</h2>
                        <p>
                            Interested teams can now show their interest in the
                            getlinked tech hackathon 1.0 2023 by proceeding to register
                        </p>
                    </div>
                </div>
                <div className="container left">
                    <h2>Team Registrations end</h2>
                    <p>
                        Interested Participants are no longer Allowed to
                        register
                    </p>
                </div>
            </section>
        </section>
    </>)
}

export default Timeline;