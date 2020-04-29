import React,{ Component }  from 'react';
export default class FormRegister extends Component{
    render(){
        return <div className='modal-dialog'>
            <div className='col-sm-12 modalLogin'>
                <div className='modal-content modal-seccion'>
                    <div class='col-12  form-group '>
                        <label className='text-danger'for='exampleInputEmail1'>User name</label>
                        <input type='text' className='form-control inputLogin' placeholder='User name'/>
                    </div>
                    <div class='col-12  form-group '>
                        <label className='text-danger'for='exampleInputEmail1'>Email address</label>
                        <input type='email' className='form-control inputLogin' aria-describedby='emailHelp' placeholder='Enter email'/>
                    </div>
                    <div class='col-12  form-group '>
                        <label className='text-danger'for='exampleInputPassword1'>Password</label>
                        <input type='password' className='form-control inputLogin'  placeholder='Password'/>
                        <small  class='form-text text-success'>Your password must be greater than 6 digits.</small>
                    </div>
                    <div class='col-12 text-center'>
                        <button type='submit' class='btn btn-outline-danger'>register</button>
                    </div>
               
                
                 </div>
                 
             </div>

        </div>
        
    }
}