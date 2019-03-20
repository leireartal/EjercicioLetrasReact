import React, { Component } from 'react';

import CharComponent from './CharComponent/CharComponent';


     class Chars extends Component {
          constructor( props ) {
              super( props );
              //console.log( '[Persons.js] Inside Constructor', props );
          }
      
          componentWillMount () {
               console.log( '[Chars.js] Inside componentWillMount()' );
          }
      
          componentDidMount () {
               console.log( '[Chars.js] Inside componentDidMount()' );
          }
      
          componentWillReceiveProps ( nextProps ) {
               //console.log( '[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps );
          }
      
          shouldComponentUpdate ( nextProps, nextState ) {
               //console.log( '[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState );
              //return nextProps.persons !== this.props.persons;
              return true;
          }
      
          componentWillUpdate ( nextProps, nextState ) {
              // console.log( '[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState );
          }
      
          componentDidUpdate () {
              // console.log( '[UPDATE Persons.js] Inside componentDidUpdate' );
          }
          render () {
               console.log( '[Chars.js] Inside render()' );
               return this.props.chars.map( ( char, index ) => {
                   return <CharComponent
                   letra={char}
                   key={index}
                   click={() => this.props.clicked(index)}
              />
                   } );
           }
       }
          

export default Chars;







   




