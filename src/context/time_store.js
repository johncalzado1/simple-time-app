import React from 'react';

import { timeHelpers } from '../helpers/time_helper';

export const TimeContext = React.createContext();
export const TimeConsumer = TimeContext.Consumer;

export class TimeProvider extends React.Component {
    constructor(props) {
        super(props)
        this.setTime = async () => {
            const time = await timeHelpers.fetchTime();
            this.setState({ time: time });
        }

        this.getTime = () => {
            return this.state.time
        }

        this.state = {
            time: "",
            setTime: this.setTime,
            getTime: this.getTime
        }
    }

    render() {
        return (
            <TimeContext.Provider value={this.state}>
                {this.props.children}
            </TimeContext.Provider>
        )
    }
}