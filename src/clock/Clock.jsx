import React from 'react';
import { Button } from 'reactstrap';


export default class Clock extends React.PureComponent {
    options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    state = {
        time: new Intl.DateTimeFormat
            ('en-CA', this.options).format(new Date())
    }

    timerRef = null;

    startTimer = () => {
        this.timerRef = setInterval(() => {
            //console.log('tick');
            this.setState({
                time: new Intl.DateTimeFormat
                    ('en-CA', this.options).format(new Date())
            })
        }, 100)
    }

    stopTimer = () => {
        clearInterval(this.timerRef);
        this.timerRef = null;
    }

    timerToggler = () => {
        if (this.timerRef) {
            this.stopTimer();
        } else {
            this.startTimer();
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.time !== this.state.time) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentWillUnmount = () => {
        this.stopTimer();
    }

    render = () => {
        console.log(this.state.time);
        return (
            <>
                <Button color="primary" onClick={this.timerToggler}>
                    Toggle Clock
                </Button>
                <h1>{this.state.time}</h1>
            </>
        );
    }
}