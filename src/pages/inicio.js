import React,{ Component }  from 'react';
//import { render } from '@testing-library/react';
import notebook from '../images/pluma.png'
import flecha from '../images/flecha.png'
class Logo extends Component {
    render(){
        return <div>
                 <header>
                   
                     <h1>{this.props.title}</h1>
                     <img src={notebook}
                     alt='logo' height='180px' width='180px'/>

                 </header>
            
         </div>
    }

}
class BtnNext extends Component{
    render(){
      return  <img className='flechaInicio'
                src={flecha} 
                alt={this.props.alt}
                height='40px' width='40px'
                />
    }
}
export default class Inicio extends Component{
    render(){
       return   <div className='App-header'>
           
                    <Logo title='lab notes'/>
                    
                    <p className="text-info">
                     your <code> notebook</code>.
                    </p>
                    <BtnNext alt='siguiente' />
         </div>
    }
}
