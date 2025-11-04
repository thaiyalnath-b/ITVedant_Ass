import React, { useEffect, useState } from "react";
import './StopWatch.css';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && !isPaused) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning, isPaused]);

    const handleStart = () => {
        setTime(0);
        setIsRunning(true);
        setIsPaused(false);
    }

    const handlePause = () => {
        setIsPaused(true);
    };

    const handleResume = () => {
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(false);
        setTime(0);
    };

    return (
        <div className="out">
            <div className="in">
                <h1>Stopwatch</h1>
                <h2>{time}  seconds</h2>

                <div className="btns">
                    {!isRunning && (
                        <button onClick={handleStart} className="start">Start</button>
                    )}

                    {isRunning && !isPaused && (
                        <button onClick={handlePause} className="pause">Pause</button>
                    )}

                    {isRunning && isPaused && (
                        <button onClick={handleResume} className="resume">Resume</button>
                    )}

                    {(isRunning || isPaused) && (
                        <button onClick={handleStop} className="stop">Stop</button>
                    )}
                </div>
            </div>
        </div>
    );
};


export default StopWatch;