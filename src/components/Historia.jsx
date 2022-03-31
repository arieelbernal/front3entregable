import React, { Component } from 'react';
import Swal from 'sweetalert2';
import Slide from './Slide.jsx';


class Historia extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state={
            consentimiento: false,
            desmontar:false,
        }
    }
    componentDidMount(){
        Swal.fire({
            title: 'Es necesario tu consentimiento para continuar',
            text: "Estás seguro de querer seguir adelante?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
          }).then((result) => {
            if (result.isConfirmed) {
              this.setState({consentimiento:true});
              Swal.fire(
                'Seguimos adelante',
                'Muchas gracias por la cooperación',
                'success'
              )
            }
            else{
                this.setState({desmontar:true});
            }
          })
    }
    componentDidUpdate(){
        if(this.state.desmontar){
            document.getElementById('root').innerHTML += '<audio src="./probtec.mp3" autoplay></audio>';
        };
    }
    render(){
        return(
            this.state.desmontar? <p className='opciones fin'>Disculpe las molestias ocasionadas</p>:<Slide consentimiento={this.state.consentimiento}></Slide>
        );
        
    }
}


export default Historia;