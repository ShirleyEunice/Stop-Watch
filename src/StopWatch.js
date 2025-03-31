import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() =>{
    let timer;
    if(isRunning){
      timer = setInterval(() =>{
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }else{
      clearInterval(timer);
    }
    return ()=> clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) =>{
    const milliseconds = ("0" + ((time/10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time/100) % 60)).slice(-2);;
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);;
    const hours = ("0" + Math.floor((time/3600000))).slice(-2);;

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <Container className='d-flex flex-column align-items-center mt-5'>
      <Card className='text-center p-4 shadow-lg' style={{width:"400px"}}>
        <h2 className='mb-3'>Stop Watch</h2>
        <h1 className='display-4 fw-bold text-primary'>{formatTime(time)}</h1>
        <Button 
        className=' m-2 btn btn-success'
        onClick={() => setIsRunning(true)}
        >Start</Button>
        <Button 
        className='m-2 btn btn-warning'
        onClick={() => setIsRunning(false)}
        >Stop</Button>
        <Button 
        className='m-2 btn btn-danger'
        onClick={() => {setIsRunning(false); setTime(0);}}
        >Reset</Button>
      </Card>
    </Container>
  )
}

export default StopWatch
