import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }
// the Header (parent) component will not update 'CounterButton' unless 'count' is clicked
     shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps, nextState)
        // return true;
         if (this.state.count !== nextState.count) {
             return true
         }
         return false
     }

     updateCount = () => {
         // state updates are not synchronous (recommended way of grabbing state based on state parameter)
         this.setState(state => {
             return { count: state.count + 1}  // <---recommended way
         })
        //  this.setState({ count: this.state.count + 1 })
     }

    render(){
        console.log('CounterButton')
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;