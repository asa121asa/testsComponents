import React, {useEffect, useState} from 'react';
import {ElectrClock} from "./ElectrClock";
import {AnalogClock} from "./AnalogClock";


type clockType = {
    mode: 'Analog' | 'electr'
}

export function Clocks(props: clockType) {

    const [date, setDate] = useState(new Date())


    useEffect(() => {

        const inrevalId = setInterval(() => {
            console.log('tic')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(inrevalId)
        }

    }, [])


    let result
    switch (props.mode) {
        case "electr": {
            return result = <ElectrClock date={date}/>
        }
        case "Analog": {
            return <div><AnalogClock date={date}/></div>
        }

    }


    return <>

        {result}


    </>

}