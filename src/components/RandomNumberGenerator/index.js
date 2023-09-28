import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  random = () => Math.ceil(Math.random() * 100)

  btn = () => {
    const randomNum = this.random()
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="c1">
        <div className="c2">
          <h1 className="h1">Random Number</h1>
          <p className="p1">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn1" onClick={this.btn}>
            Generate
          </button>
          <p className="h1">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
