import React, { Component } from 'react';
import Slide from './Slide.jsx';


class Historia extends Component {
    constructor(props){
        super(props);
        console.log("Componente Historia");
    }
    
    componentDidUpdate(){
        console.log(this.state.contador);
    }
    render(){
        return(
            <Slide></Slide>
        );
    }
}


export default Historia;