import {useEffect, useState, useRef} from "react"
import { Link, useLocation, useParams, useNavigate} from "react-router-dom";
import { createChart, ColorType } from 'lightweight-charts';
import data from "../assets/data";

export default ()=>{
    const navigate = useNavigate()
    const chartContainerRef = useRef();

    const backgroundColor = 'white',
    lineColor = '#2962FF',
    textColor = 'black',
    areaTopColor = '#2962FF',
    areaBottomColor = 'rgba(41, 98, 255, 0.28)'
    let chart

    useEffect(()=>{
        navigate('/Page1', {state:{name:1}})
    },[])

    useEffect(() => {
        // setup the background
        chart = createChart(chartContainerRef.current, {
            height: 600,
            layout: {
                backgroundColor: '#fff',
                textColor: 'rgba(255, 255, 255, 0.9)',
            },
            grid: {
                vertLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
                horzLines: {
                    color: 'rgba(197, 203, 206, 0.5)',
                },
            },
            rightPriceScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
            timeScale: {
                borderColor: 'rgba(197, 203, 206, 0.8)',
            },
        });
        chart.timeScale().fitContent();
        
        // draw the chart
        let crpyto_data = fetch()
        const newSeries = chart.addCandlestickSeries({
            upColor: 'rgba(255, 144, 0, 1)',
            downColor: '#000',
            borderDownColor: 'rgba(255, 144, 0, 1)',
            borderUpColor: 'rgba(255, 144, 0, 1)',
            wickDownColor: 'rgba(255, 144, 0, 1)',
            wickUpColor: 'rgba(255, 144, 0, 1)',
        });
        newSeries.setData(data);
        
        // handle the chart
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    },[data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

    return(
        <div className="content">
            <div className="hero item">
                <h1>Chart</h1>
                <video autoPlay loop muted>
                    <source src="src/assets/mov_bbb.mp4"/>
                </video>

            </div>
            <div className="chart" ref={chartContainerRef} />
        </div>
    )
}