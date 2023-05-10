import React from "react";
import {useState, useEffect} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine} from 'recharts';
import './GraphStyle.css'
import {NOTES} from '../piano/notes';
import * as Tone from 'tone';

const Graph = ({history,keysPressed, updateKeysPressed}) => {
    const [val, setVal] = useState(0);
    const [mouseDown, setMouseDown] = useState(false);
const data = [
    { name: 'Jan', value: 100, key: "f3" },
    { name: 'Feb', value: 210, key: "c4" },
    { name: 'Mar', value: 300, key: "f4" },
    { name: 'Apr', value: 410, key: "c5" },
    { name: 'Mar', value: 350, key: "a4" },
    { name: 'May', value: 500, key: "f5" },
    { name: 'Jun', value: 600, key: "b5"},
];

const CustomDot = (props) => {
    const { cx, cy, stroke, payload, value } = props;

    let temp = keysPressed ? [...keysPressed] : [];
    if(temp.includes(payload.key))
        return(<circle key={payload.key} cx={cx} cy={cy} r={4} stroke="white" strokeWidth={2} fill="darkorange"></circle>);

    return(<circle key={payload.key} cx={cx} cy={cy} r={3} stroke="darkorange" strokeWidth={1} fill="white"></circle>);
}

// Converts input data to keys 
//TODO move away from this component since this only needs to be done once per data set
// const interpolateData = (indata) => {
//     const max = Math.max(...indata.map(o => o.value));
//     //const min = Math.min(...indata.map(o => o.value));
//     const numKeys = NOTES.length-1;
//     indata.map( v => {
//         v["key"] = NOTES.reverse()[parseInt(v.value / max * numKeys)]
//     })
// }

//* Handles clicking in the graph
const handleChartClick = (event) => {
    //Check if we have clicked in a valid area
        if(event && event.activePayload && event.activePayload.length > 0){
        //Extract the key from the clicked value
        const keyValue = event.activePayload[0].payload.key;
        // const synth = new Tone.Synth().toDestination();

        // synth.triggerAttackRelease(keyValue, "8n");
        //console.log(event.activePayload[0].payload.value);
        setVal(event.activePayload[0].payload.value);
        
        //TODO send info to OSC here
        console.log(`Key: ${keyValue}`, history);
        updateKeysPressed([keyValue]);
    }
}

//* Handles holding click and draging in the graph
const handleChartMove = (event) => {
    //Check if we have clicked in a valid area
        if(event && event.activePayload && event.activePayload.length > 0){
            if(mouseDown && val !== event.activePayload[0].payload.value) {
            //Extract the key from the clicked value
            const keyValue = event.activePayload[0].payload.key;
            //console.log(event.activePayload[0].payload.value);
            setVal(event.activePayload[0].payload.value);
            
            //TODO send info to OSC here
            console.log(`Key: ${keyValue}`, history);
            updateKeysPressed([keyValue]);
        }
    }
}

const renderTooltip = (event, { active, payload }) => {
    
    if (active && payload && payload.length) {
      //console.log(event);
      //setVal(payload.cy);
      const {name, value} = payload[0];
      const key = payload[0].payload.key;
      return (
        <div className="custom-tooltip">
          <p>{`Key: ${key}`}</p>
          <p>{`${name}: ${value}`}</p>
        </div>
      );
    }
    return null;
  };
    //interpolateData(data);
    //console.log(data[1]);
    return(  
        <div className="graph-wrapper">
        <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} onClick={handleChartClick} onMouseMove={handleChartMove} onMouseDown={() => setMouseDown(true)} onMouseUp={() => setMouseDown(false)}>
                <XAxis hide="true" dataKey="name"/>
                <YAxis orientation="right" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip content={renderTooltip} wrapperStyle={{ width: 100, backgroundColor: '#ccc', position: "absolute" }}/>
                <ReferenceLine y={val} stroke={"green"}/>
                <Line type="monotone" isAnimationActive={false} dataKey="value" stroke="#ff7300" yAxisId={0} dot={<CustomDot/>}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}

export default Graph;