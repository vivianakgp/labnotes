import React,{ Component }  from 'react';
import Menu from '../componentes/menu.js';
import FormLogin from '../componentes/form-login.js';

export default class Login extends Component{
    render(){
        return <div>
                <Menu/>
                 <FormLogin/>
                
        </div>
    }
}