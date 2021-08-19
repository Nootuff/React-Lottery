
import React from "react"
import LotteryBall from "./LotteryBall"
import '../styles/Lottery.css';

class Lottery extends React.Component {
    static defaultProps = { //Default props, a react app reliant on props should probably always have these. If no props are entered, these will be the values. 
        title: "Lotto!",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props){
        super(props)
        this.state = {nums: Array.from({length: this.props.maxBalls})}; //The Array.from() method returns an Array object from any object with a length property or any iterable object. the nums state then = this created object. Don;t really understand how this works.
        this.generate = this.generate.bind(this)
    }
    generate(){
        this.setState(curState => ({
            nums: curState.nums.map( //Creates a new array somehow?
                n =>  Math.floor(Math.random() * this.props.maxNum) + 1
                )
        }));
    }
    render() {
       /* let numbBalls = this.props.numbBalls;
        let balls = [];

        for (let i = 0; i < numbBalls; i++) {
            balls.push(<LotteryBall number={Math.floor(Math.random() * this.props.maxNum)} />)
        } */
        return (
            <div className="Lottery">
                <h1>{this.props.title} </h1>
                <h3> balls!</h3>
                {this.state.nums.map(n => <LotteryBall num={n} />)}
                <br/>
                <button onClick={this.generate}>Generate</button>
            </div>
        )
    }
}

export default Lottery