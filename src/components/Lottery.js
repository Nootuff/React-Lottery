
import React from "react"
import LotteryBall from "./LotteryBall"
import '../styles/Lottery.css';

class Lottery extends React.Component {
    static defaultProps = { //Default props, a react app reliant on props should probably always have these. If no props are entered, these will be the values. 
        title: "Lotto!",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props)
        this.state = { nums: Array.from({ length: this.props.maxBalls }) }; //The Array.from() method returns an Array object from any object with a length property or any iterable object. the nums state then = this created object. Don;t really understand how this works. "Nums" is the actual state, the key, while the Array.from is the value. 
        this.generate = this.generate.bind(this)
    }

    generate() {
        this.setState(curState => ({ //Take the current state, curState is just a parameter. 
            nums: curState.nums.map( //Creates a new array somehow & sets this as the value of the "nums" state. 
                n => Math.floor(Math.random() * this.props.maxNum) + 1 //Generates a random number between 1 and this.props.maxNum
            )
        }));
    }

    render() {
        /* 
        My old code, not part of the functioning programme. 
        let numbBalls = this.props.numbBalls;
         let balls = [];
 
         for (let i = 0; i < numbBalls; i++) {
             balls.push(<LotteryBall number={Math.floor(Math.random() * this.props.maxNum)} />)
         } */
        return (
            <div className="Lottery">
             
                <h1>{this.props.title} </h1>
             
           <table>
               <tr>
                {this.state.nums.map(n => <td><LotteryBall num={n} /></td>)} {/*Maps over the nums state within the html*/}
                </tr>
                </table>
                <button onClick={this.generate}>Generate</button>
               
            </div>
        )
    }
}

export default Lottery