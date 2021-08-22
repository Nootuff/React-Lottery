import React from "react"
import '../styles/LotteryBall.css';

class LotteryBall extends React.Component {
    render() {

       
        return (
            <div className="LotteryBall">
              <h1 className="Number">{this.props.num}</h1>
            </div>
        )
    }
}

export default LotteryBall