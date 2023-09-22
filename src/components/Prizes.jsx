import rewardsTrophy from "../images/Reward place holder.png"
import rewards from "../images/Rewards group.png"

function Prizes() {
    return (<>
        <section className="prizes">
            <section className="prizes__text">
                <h2>Prizes and <span className="text--primary">Rewards</span></h2>
                <p>Highlight of the prizes and rewards for winners and participants</p>
            </section>
            <section className="prizes__trophy">
                <img src={rewardsTrophy} alt="" className="rewardsTrophy"/>
            </section>
            <section className="prizes__prize">
                <img src={rewards} alt="" className="prize"/>
            </section>
        </section>
    </>)
}

export default Prizes;