import React from 'react';
import _ from 'lodash';
import {Key} from './Key.js';
import Graph from '../graph/Graph';
import './Piano.css';
import {NOTES} from './notes.js';

class Piano extends React.Component {
    state = {keyPressed: 'No note played yet'}
    
    handleChildVar = (keyNote, clicked) => {
        this.setState({
            keyPressed: keyNote
        });
        console.log(keyNote);

        //Send the clicked keys to App.js
        let tempList = this.props.keysPressed ? [...this.props.keysPressed] : [];
        tempList.includes(keyNote) ? tempList.splice(tempList.indexOf(keyNote),1) : tempList.push(keyNote);
        this.props.updateKeysPressed(tempList);
        /*var thenote=this.state.isClicked;
        console.log(thenote);*/
    }
    render() {
        const keys = _.map(NOTES,(note,index) => {
            let tempList = this.props.keysPressed ? [...this.props.keysPressed] : [];
            let boleanTemp = false;
            tempList.includes(note) ? boleanTemp=true : boleanTemp=false;
            return (
                <Key
                    key={index}
                    note={note}
                    keyNote={this.handleChildVar}
                    keyPressed={boleanTemp}
                />
            );
        });
        // <Graph>
        //     keyNote={this.handleChildVar}
        // </Graph>
        return(
            <div className="piano">
               {keys}
            </div>
        );

    }
}
export {Piano}


