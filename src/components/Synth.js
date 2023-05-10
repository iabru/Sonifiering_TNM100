import * as Tone from 'tone';
const Synth = (props) => {
    const synth = new Tone.Synth().toDestination();
    const keysPressed = props.keysPressed;
    for(var i = 0; i < keysPressed.length; i++) {
        synth.triggerAttackRelease(keysPressed[i], "8n")
    }
      
    
    
}
export default Synth