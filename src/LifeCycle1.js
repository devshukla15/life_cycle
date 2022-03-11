import React, { Component } from "react"
import LifeCycle2 from "./LifeCycle2"

class LifeCycle1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Dev",
    }
    console.log("LifeCycle1 Constructor")
  }

  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycle1 getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycle1 componentDIdMount")
  }

  shouldComponentUpdate() {
    console.log("LifeCycle1 shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle1 getSnapShotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycle1 componentDidUpdate")
  }

  changeState = () => {
    this.setState({
      name: "Shukla",
    })
  }

  render() {
    console.log("LifeCycle1 render")
    return (
      <>
        <div>Mounting LifeCycle</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycle2 />
      </>
    )
  }
}

export default LifeCycle1
