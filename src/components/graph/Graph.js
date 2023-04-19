import React from "react";
import {useState} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine} from 'recharts';
import './GraphStyle.css'
import {NOTES} from '../piano/notes';
const Graph = () => {
    const [val, setVal] = useState(0);
const data = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 200 },
    { name: 'Mar', value: 300 },
    { name: 'Apr', value: 400 },
    { name: 'Mar', value: 350 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 600 },
];

// Converts input data to keys 
//TODO move away from this component since this only needs to be done once per data set
const interpolateData = (indata) => {
    const max = Math.max(...indata.map(o => o.value));
    //const min = Math.min(...indata.map(o => o.value));
    const numKeys = NOTES.length-1;
    indata.map( v => {
        v["key"] = NOTES[parseInt(v.value / max * numKeys)]
    })
}

// const calculateKeys = () => {
//     const keyHeight = 20;
//     const keyGap = 0;
//     const numKeys = NOTES.length;
//     const tickCount = Array(numKeys).fill().map((_,i) => (i + 1) * (keyHeight + keyGap) - keyHeight / 2);
//     console.log(tickCount);
//     return tickCount;
// }

const handleChartClick  = (event) => {
    
    if(event && event.activePayload && event.activePayload.length > 0){
        //Extract the key from the clicked value
        const keyValue = event.activePayload[0].payload.key;
        console.log(event.activePayload[0].payload.value);
        setVal(event.activePayload[0].payload.value);
        //console.log(`Key: ${keyValue}`);
    }
}

const renderTooltip = (event, { active, payload }) => {
    
    if (active && payload && payload.length) {
      console.log(event);
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
    interpolateData(data);
    console.log(data[1]);
    return(  
        <div className="graph-wrapper">
        <ResponsiveContainer width="100%" height={window.innerHeight}>
            <LineChart data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }} onClick={handleChartClick}>
                <XAxis hide="true" dataKey="name"/>
                <YAxis orientation="right" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Tooltip content={renderTooltip} wrapperStyle={{ width: 100, backgroundColor: '#ccc' }}/>
                <ReferenceLine y={val} stroke={"green"}/>
                <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
}

export default Graph;