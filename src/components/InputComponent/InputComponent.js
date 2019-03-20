import React from 'react';
import Radium from 'radium';



const inputcomponent = ( props ) => {
    
    return (
        <div className="Input">
             {/* <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.text}></input> */}
             <input type="text" onChange={props.changed} value={props.text}></input>
        </div>
    )
};

export default Radium(inputcomponent);