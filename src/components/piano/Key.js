import React from "react";
import './Key.css';

class Key extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['white', '#2EC4B6'],
            isFlat: false,
            isClicked: false
        };
    }
    noteIsFlat = (note) => {
        return note.length>2;
    }
    handleClick = (e) => {
        this.props.keyNote(this.props.note);
        this.setState({isClicked: !this.state.isClicked});
        
        if(e.target.className === "key flat") {
            if(this.state.color[1] === '#2EC4B6') {
                this.setState({color: [this.state.color[0], '#089184']})
            }
            else if(this.state.color[1] === '#089184'){
                this.setState({color: [this.state.color[0], '#2EC4B6']})
            }
        }
        else {
            if(this.state.color[0] === 'white') {
                this.setState({color: ['#CBF3F0', this.state.color[1]]})
                
            }
            else if(this.state.color[0] === '#CBF3F0'){
                    this.setState({color: ['white', this.state.color[1]]})
            }
        }
        this.forceUpdate();
    }
    render() {
        
        let keyClassName="key";
        
        const noteIsFlat = this.noteIsFlat(this.props.note);
        if (noteIsFlat) {
            keyClassName += " flat";
        }
        let key;
        if(noteIsFlat)  {
            key = (
            <div className={keyClassName} style={{backgroundColor: this.state.color[1]}} onClick={this.handleClick}></div>);
        }
        else {
            key = (<div className= {keyClassName} style = {{backgroundColor: this.state.color[0]}} onClick={this.handleClick}>
                        <div className="key-text">
                            {this.props.note.toUpperCase()}
                        </div>
                    </div>);
        }
        return key;
    }
}
export {Key}