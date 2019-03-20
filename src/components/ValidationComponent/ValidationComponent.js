import React from 'react';

import './ValidationComponent.css';

const validationcomponent = ( props ) => {
    
    let texto="";
    const classes=[];
    if(props.longitud===0){
        texto = "";
    }else{
        if(props.longitud>5){
            texto = "too long";
            classes.push('blue');
        }else{
            texto = "too short";
            classes.push('red');
        }
    }
    return (
            <p className={classes.join(' ')}>{texto}</p> 
    )
};

export default validationcomponent;