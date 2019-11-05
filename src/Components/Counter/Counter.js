import React from 'react'
import './Counter.css'

class Counter extends React.Component {
  state = {
    thumbCount: 0,
    fistCount: 0,
    clapCount: 0
  }

  handleThumbClick = () => {
    const newCount = this.state.thumbCount + 1
    this.setState({
      thumbCount: newCount
    })
  }

  handleFistClick = () => {
    const newCount = this.state.fistCount + 1
    this.setState({
      fistCount: newCount
    })
  }

  handleClapClick = () => {
    const newCount = this.state.clapCount + 1
    this.setState({
      clapCount: newCount
    })
  }

  render() {
    return (
      <div className='counter'>
        <button
        className='counterBtn'
        onClick={this.handleThumbClick}
        >
          <span role="img" aria-label="thumbs-up"> 👍 </span>
        </button>
        <p>{this.state.thumbCount}</p>

        <button
        className='counterBtn'
        onClick={this.handleFistClick}
        >
          <span role="img" aria-label="fist-bump"> 👊 </span>
        </button>
        <p>{this.state.fistCount}</p>

        <button
        className='counterBtn'
        onClick={this.handleClapClick}
        >
          <span role="img" aria-label="clapping"> 👏 </span>
        </button>
        <p>{this.state.clapCount}</p>
      </div>
    )
  }
}


export default Counter
