import React, { Component } from "react"

class LifeCycle2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Dev",
    }
    console.log("LifeCycle2 Constructor")
  }

  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycle2 getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycle2 componentDIdMount")
  }

  shouldComponentUpdate() {
    console.log("LifeCycle2 shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycle2 getSnapShotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycle2 componentDidUpdate")
  }

  render() {
    console.log("LifeCycle2 render")
    return <div>Mounting LifeCycle 2</div>
  }
}

export default LifeCycle2
