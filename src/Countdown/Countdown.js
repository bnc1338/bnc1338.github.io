import './Countdown.css';
import logoPumped from '../assets/pumpedTextPlainLogo.png';
import Model3D from '../Model3D/Model3D';
import GlassBox from '../Components/Glassbox';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

function Countdown() {
  const targetDate = new Date('2024-06-26T18:00:00');

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
  }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="Countdown background-gradient">
      <div className='topBar'>
        <a><img src={logoPumped} alt="" width={"auto"} height={"100%"}/></a>
      </div>
      <div className='content'>
        <div className='content-header'>
          <h1>STAY <span style={{fontWeight:800,color:"#ffff" }}>PUMPED</span>!</h1>
          <div className='counter'>
            <GlassBox upperText={"days"} bottomText={timeLeft.days}/>
            <GlassBox upperText={"hours"} bottomText={timeLeft.hours}/>
            <GlassBox upperText={"minutes"} bottomText={timeLeft.minutes}/>
            <GlassBox upperText={"seconds"} bottomText={timeLeft.seconds}/>
          </div>
        </div>
        <div className='content-mid'>
          <Marquee className="h1s" speed={130} gradient={false} pauseOnClick={true}>
            <h1>Coming soon...</h1>
          </Marquee>
          <Model3D/>
        </div>
        <div className='content-footer'>
          <h1 style={{textAlign:"center", color:"white", fontWeight:"350", fontSize:30}}>Join the <span style={{color:"#F7C542"}}>fitness</span> revolution!</h1>
          <div className='subscribe-container'>
          <input type='text' className='left-side' placeholder='Type your email...' />
            <div className='right-side'>
              Join
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
