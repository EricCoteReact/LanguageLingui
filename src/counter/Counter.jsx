import React from 'react';
import MyButton from './MyButton';
import MyTextbox from './MyTextBox'


export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: window.counter || (+props.init) || 1 };
    }

    componentWillUnmount() {
        window.counter = this.state.count;
    }

    click = (incr) => {
        this.setState({count: this.state.count + incr});
    }

    change = (e) => {
        if (!isNaN(+e.target.value))  {  
            this.setState({count: +e.target.value});
        }
    }

    render() {
        const {count} = this.state;
        return (<>
                    <h1>the count is: {count} </h1>
                    <MyButton onClick={this.click} incr="1" />
                    <MyButton onClick={this.click} incr="10" />
                    <MyButton onClick={this.click} incr="100" />
                    <MyTextbox value={count} onChange={this.change}  />
                </> );
    }
}