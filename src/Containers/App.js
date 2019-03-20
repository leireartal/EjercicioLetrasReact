import React, { Component } from 'react';
// import ValidationComponent from './ValidationComponent/ValidationComponent';
// import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponent from '../components/Chars/CharComponent/CharComponent';
import classes from './App.css';
import Chars from '../components/Chars/Chars';
import InputComponent from '../components/InputComponent/InputComponent';



class App extends Component {
  state = {
    text: ''
  }


  handleChange = ( event ) => {
     this.setState( {
      text:event.target.value
   });
  }
  deleteCharHandler = (Index) => {
    // const persons = this.state.persons.slice();
    const texto = this.state.text;
    let unArraytexto = texto.split('');
    unArraytexto.splice(Index, 1); //le quita uno
    const nuevotexto=unArraytexto.join("");
    this.setState({text: nuevotexto});
  }

  render () {
    
    let cadena=null;
    let st=null;
    // console.log(cadena);
  /*FUNCION PARA RECORRE LA LISTA*/
  if (this.state.text.length!==0 ) {
    let st=this.state.text;
    let unArray = st.split('');

    cadena=<Chars
      chars={unArray}
      clicked={this.deleteCharHandler}
      />;

    // cadena = (
    //   <div>
    //     {/* La funcion se asigna a cada elemento del array y el index esta accesible */}
    //     {unArray.map((char, index) => {
         
    //           return <CharComponent
    //             letra={char}
    //             key={index}
    //             click={() => this.deleteCharHandler(index)}
    //            />
    //     })}
    //   </div>
    // );
    
      }
  /*-----------------------------*/
      return (
         <div className={classes.App}>
        
        <InputComponent changed={this.handleChange}></InputComponent>
          {/* <input type="text" onChange={(event)=>this.handleChange(event)} value={this.state.text}></input> */}
          <ValidationComponent longitud={this.state.text.length} text={this.state.text}></ValidationComponent>
          {cadena}
        { /* <CharComponent letra="l" style={style}></CharComponent>*/}
        </div>
      );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  
  }
}


export default App;
