
import React, { Component } from 'react';



class CharComponent extends Component {
  constructor( props ) {
      super( props );
      // console.log( '[Person.js] Inside Constructor', props );
  }

componentWillMount () {
     console.log( '[CharComponent.js] Inside componentWillMount()' );
   
};

componentDidMount () {
     console.log( '[CharComponent.js] Inside componentDidMount()' );
}


  render () {
    console.log( '[CharComponent.js] Inside render' );
    const style={
      display:'inline-block',
      padding:'16px',
     // text-align:'center';
      margin:'16px',
      border:'1px solid black'
  };
    return (
        <div className="CharComponent" onClick={this.props.click} style={style}>
        {/* </div> <div className={classes.CharComponent} onClick={props.click} > {props.letra} */}
         <p>{this.props.letra}</p> 
        
        </div>
    )
    
};
} 

export default CharComponent;

