import React,{ Component }  from 'react';
import Menu from '../componentes/menu.js';
import FormRegister from '../componentes/form-register.js';

export default class Register extends Component{
    render(){
        return <div>
            <Menu/>
            <FormRegister/>
        </div>
    }
}