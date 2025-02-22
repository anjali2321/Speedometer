import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
    }
  onApplyBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  render() {
    const {speed}=this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="pre-heading">Speed is {speed}mph</h1>
          <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button className="btn button-1" type="button" onClick={this.onAccelerate}>
              Accelerate
            </button>
            <button className="btn button-2" type="button" onClick={this.onApplyBrake}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
