import React, { Component } from 'react';
import Swal from 'sweetalert2';

class Historial extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    
    componentWillUnmount(){
        if(this.props.consentimiento){
            setTimeout(() => {
                Swal.fire(
                    'Haz llegado al final del recorrido',
                    'Agradecemos tu participación',
                    'success'
                )
            }, 8000);
        }
        
    } 
    render(){
        console.log("Render Historial");
        return(
            <div className='opciones'>
                <p>Tu selección anterior fue: {this.props.array.length<1? "": this.props.array[this.props.array.length-1]}</p>
                <p>Las elecciones previas:</p>
                <ul>
                    {this.props.array.map((e,i) => <li key={i}>{e}</li> )}
                </ul>
            </div>
        )
    }
}


export default Historial;