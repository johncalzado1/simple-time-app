import {globals} from '../globals'

export const timeHelpers = {
    fetchTime: async () => {
        const timeDataResponse = await fetch(globals.timeApiUrl);
        const timeDataJSON = await timeDataResponse.json();
        const currentTime = timeDataJSON['currentDateTime'];
        const timeZone = timeDataJSON['timeZoneName'];

        return ({
            currentTime: currentTime,
            timeZone: timeZone
        })
    }
}