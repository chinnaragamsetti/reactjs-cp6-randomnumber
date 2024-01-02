// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomnumber: 0}

  generateNumber = () => {
    const rand = Math.random() * 100
    const generatedrandomnumber = Math.ceil(rand)
    console.log(generatedrandomnumber)
    this.setState({randomnumber: generatedrandomnumber})
  }

  render() {
    const {randomnumber} = this.state

    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="number">{randomnumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
