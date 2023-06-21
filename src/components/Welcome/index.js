import {Component} from 'react'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div>
        <h1>Welcome</h1>
        <h1>Thank yoy!Happy Learning.</h1>
        <button type="button" onClick={this.buttonText}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
