import React, { Component } from 'react';
import Historial from './Historial.jsx';
import 'animate.css';
import datos from './data.json';

let elecciones=[];

class Slide extends Component{
    constructor(props){
        super(props);
        this.state = {
            eleccion: "",
            historia: datos[0].historia,
            opcionA: datos[0].opciones.a,
            opcionB: datos[0].opciones.b,
            contador: 1,
            finalizado: false,
        };

        console.log("Se ejecutó constructor");
    }
    eventoClick(opcion){
        if(this.state.contador<datos.length){
            this.setState({eleccion:opcion, historia:datos[this.state.contador].historia, opcionA:datos[this.state.contador].opciones.a, opcionB:datos[this.state.contador].opciones.b, contador:this.state.contador+2});
        }
        else{
            this.setState({finalizado:true});
        }
        elecciones.push(opcion);
    }


    render(){
        console.log("Render");
        return(
            <div>
                {!this.state.finalizado?<><p className="recordatorio historia">{this.state.historia}</p><p className="recordatorio opcion"><button className="botones" onClick={(e)=>{this.eventoClick("A")}}>A</button>{this.state.opcionA}</p>
                <p className="recordatorio opcion"><button className="botones" onClick={(e)=>{this.eventoClick("B")}}>B</button>{this.state.opcionB}</p></>:<><p className='opciones fin animate__animated animate__hinge'>FIN</p></>}
                {elecciones.length<5?<Historial array={elecciones} consentimiento={this.props.consentimiento}/>:
                    <><p className='opciones animate__animated animate__fadeInUp animate__slower'>Tu historial de elecciones fue: {elecciones.join(" - ")}</p><p className='opciones animate__animated animate__fadeInUp animate__slower'>Espero que te hayas divertido!</p></>}
            </div>

        )
    }
}


export default Slide;