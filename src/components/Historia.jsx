import React, { Component } from 'react';
import datos from './data.json'


class Historia extends Component {
    constructor(props){
        super(props);
        this.state = {
            historia: datos[0].historia,
            opcionA: datos[0].opciones.a,
            opcionB: datos[0].opciones.b,
            contador: 1,
            eleccion: [],
        };
    }
    
    componentDidUpdate(){
        console.log(this.state.contador);
    }
    render(){
        return(
            <div>
                <p className="recordatorio historia">{this.state.historia}</p>
                <p className="recordatorio opcion"><button className="botones" onClick={(e)=>{this.state.contador<datos.length?this.setState({historia:datos[this.state.contador].historia, opcionA:datos[this.state.contador].opciones.a, opcionB:datos[this.state.contador].opciones.b, contador:this.state.contador+1}):e.preventDefault()}}>A</button>{this.state.opcionA}</p>
                <p className="recordatorio opcion"><button className="botones" onClick={(e)=>{this.state.contador<datos.length?this.setState({historia:datos[this.state.contador].historia, opcionA:datos[this.state.contador].opciones.a, opcionB:datos[this.state.contador].opciones.b, contador:this.state.contador+1}):e.preventDefault()}}>B</button>{this.state.opcionB}</p>
            </div>
        );
    }
}


export default Historia;