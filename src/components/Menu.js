import React from 'react';

import {CounterContext} from '../providers/CounterProvider';

function Menu() {
    const {minutes, setFocusMinutes, setRestMinutes} = React.useContext(CounterContext);

    function setSession(index){
        setFocusMinutes(minutes[index].focus);
        setRestMinutes(minutes[index].rest);
    }

    return (
        <div className="Menu">

            <div className="chooseMinute">
                <label htmlFor="pomodoroSession">Choose session </label>
                <br/>
                <select id="pomodoroSession" onChange={(event)=>{setSession(event.target.value)}}>
                    {
                        minutes.map((minute,index) => {
                            return (
                                <option value={index} key={index}>{minute.focus}mins || {minute.rest}mins </option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default Menu;