import * as Tone from 'tone';
const Synth = (props) => {
    var synth = new Tone.Synth().toDestination();
    const keysPressed = props.keysPressed;
    console.log(props.historyUpdate);
    if(keysPressed[0]!==undefined) {
        if(props.historyUpdate.tab1Option[1]===0) {
            const osc = new Tone.Oscillator(keysPressed[0], "sine").toDestination()
            if(props.historyUpdate.tab1Option[0]===0) {
                osc.type="sine";
            } 
            else if(props.historyUpdate.tab1Option[0]===1) {
                osc.type="sawtooth";
            }  
            else if(props.historyUpdate.tab1Option[0]===2) {
                osc.type="triangle";
            }  
            else if(props.historyUpdate.tab1Option[0]===3) {
                osc.type="square"
            }  
            osc.start();
            osc.stop("+0.75");
        }
        else if(props.historyUpdate.tab1Option[1]===1)
        {
            const osc = new Tone.Synth().toDestination().triggerAttackRelease(keysPressed[0], "8n");

        }
        if(props.historyUpdate.tab2Option[1]===1) {
            const noise = new Tone.Noise("white");
            if(props.historyUpdate.tab2Option[2]===1) {
                const filter = new Tone.Filter(440, "lowpass").toDestination();
                noise.connect(filter).start();
                

            }
            else if(props.historyUpdate.tab2Option[2]===2){
                const filter = new Tone.Filter(440, "bandpass").toDestination();
                noise.connect(filter).start();
            }
            else if(props.historyUpdate.tab2Option[2]===3) {
                const filter = new Tone.Filter(440, "highpass").toDestination();
                noise.connect(filter).start();
            }
            else {
                noise.toDestination().start();
            }
            noise.stop("+1");
        }
        else if(props.historyUpdate.tab2Option[1]===2) {
            const noise = new Tone.Noise("pink");
            if(props.historyUpdate.tab2Option[2]===1) {
                const filter = new Tone.Filter(440, "lowpass").toDestination();
                noise.connect(filter).start();
                

            }
            else if(props.historyUpdate.tab2Option[2]===2){
                const filter = new Tone.Filter(440, "bandpass").toDestination();
                noise.connect(filter).start();
            }
            else if(props.historyUpdate.tab2Option[2]===3) {
                const filter = new Tone.Filter(440, "highpass").toDestination();
                noise.connect(filter).start();
            }
            else {
                noise.toDestination().start();
            }
            noise.stop("+1");
        }
        else if(props.historyUpdate.tab2Option[1]===3) {
            const noise = new Tone.Noise("brown");
            if(props.historyUpdate.tab2Option[2]===1) {
                const filter = new Tone.Filter(440, "lowpass").toDestination();
                noise.connect(filter).start();
                

            }
            else if(props.historyUpdate.tab2Option[2]===2){
                const filter = new Tone.Filter(440, "bandpass").toDestination();
                noise.connect(filter).start();
            }
            else if(props.historyUpdate.tab2Option[2]===3) {
                const filter = new Tone.Filter(440, "highpass").toDestination();
                noise.connect(filter).start();
            }
            else {
                noise.toDestination().start();
            }
            noise.stop("+1");
        }
    }
    
      
    
    
}
export default Synth