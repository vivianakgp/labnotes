import React,{ Component }  from 'react';

export default class FormLogin extends Component{
    render(){
        return <div className='modal-dialog'>
                <div className='col-sm-12 modalLogin'>
                    <div className='modal-content modalLoginMain'>
                        <div class='col-12  form-group '>
                            <label for='exampleInputEmail1'>Email address</label>
                            <input type='email' className='form-control inputLogin' 
                            aria-describedby='emailHelp' placeholder='Enter email'/>
                            <small  class='form-text text-danger'>We'll never share your email with anyone else.</small>
                        </div>
                        <div class='col-12  form-group '>
                            <label for='exampleInputPassword1'>Password</label>
                            <input type='password' className='form-control inputLogin'
                            placeholder='Password'/>
                        </div>
                        <div class='col-12 text-center'>
                            <button type='submit' class='btn btn-outline-danger'>login</button>
                        </div>
                    </div>      
                </div>
            </div>
        
    }
}


