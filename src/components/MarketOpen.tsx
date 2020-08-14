import React, { useEffect, useState } from "react";
import { Sun } from '@styled-icons/boxicons-regular/Sun'
import { Moon } from '@styled-icons/boxicons-regular/Moon'
import { RealTimePriceDate, MarketStatus } from '../styled-components/text'
import { Row, Col } from '../styled-components/wrappers'
const MarketOpen = () => {
    const [dateTime, setDateTime] = useState('August 7, 2020, 9:30AM')
    const months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
    const [isOpen, setIsOpen] = useState(true)
    const updateTime= () =>{
        const today = new Date();
        const date = today.getDate();
        const month = months[today.getMonth()];
        const year = today.getFullYear();
        let hour = (today.getHours() + 24) % 12 || 12
        let min :any = today.getMinutes();
        let ampm = today.getHours()>=12 ? 'PM' : 'AM'

        if(today.getHours()>16||today.getHours()<9||(today.getHours()===9&&min<30)){
            setIsOpen(false)
        }else{
            setIsOpen(true) 
        }
    
        min = min<10 ? '0'+min : min;

        setDateTime(month+' '+date+', '+year+', '+hour+':'+min+ampm)
        setTimeout(updateTime, 60000)
        
      }

      useEffect(() => {
        updateTime()
      })
      
    
    if(isOpen){
        return (
            <div>
                <Row columnGap='15px' >
                    <Col hideWidth='950px'>
                        <RealTimePriceDate>Real-Time Price as of {dateTime} EST</RealTimePriceDate>
                    </Col>
                    <Col >
                        <MarketStatus> <Sun color='#ffbb5e' height='14px'/> Market Open </MarketStatus>
                    </Col>
                </Row>
            </div>
        )
    }else{
        return (
            <div>
                <Row columnGap='15px' >
                    <Col hideWidth='950px'>
                        <RealTimePriceDate>Real-Time Price as of {dateTime} EST</RealTimePriceDate>
                    </Col>
                    <Col >
                        <MarketStatus> <Moon color='#ffbb5e' height='14px'/> Market Close </MarketStatus>
                    </Col>
                </Row>
            </div>
            )
    }
    
}

export default MarketOpen;