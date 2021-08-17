
import React from "react"
import LotteryBall from "./LotteryBall"
import '../styles/Lottery.css';

class Lottery extends React.Component {
    render() {
        let numbBalls = this.props.numbBalls;
        let balls = [];

        for (let i = 0; i < numbBalls; i++) {
            balls.push(<LotteryBall number={Math.floor(Math.random() * this.props.maxNum)} />)
        }
        return (
            <div className="Lottery">
                <h1>{this.props.title} </h1>
                <h3>{numbBalls} balls!</h3>
                {balls}
                <br/>
            </div>
        )
    }
}

export default Lottery