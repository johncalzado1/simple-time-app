import React, { useContext, useState } from 'react';

import {TimeContext} from '../context/time_store';

export const Clock = () => {

    const timeStore = useContext(TimeContext) //We use the time context

    const [timeValue, toggleTime] = useState("click get Time button") // Same as this.state

    const onButtonClickGetTime = async () => {
        await timeStore.setTime()
        const timeData = await timeStore.getTime();
        toggleTime(timeData); // Same as using this.setState
    }

    return(
        <div>
            Clock component
            <br></br>
            <button onClick={onButtonClickGetTime}>Get Time</button>
            <br></br>
            time: {timeValue.currentTime}
            <br></br>
            time zone: {timeValue.timeZone}
        </div>
    );
}