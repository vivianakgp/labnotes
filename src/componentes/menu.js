import React,{ Component }  from 'react';

export default class Menu extends Component{
    render(){
        return <header>
            <ol className='breadcrumb blue'>
                <li className='breadcrumb-item '>
                    <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item'>
                    <a href='/register'>SIGN UP</a>
                </li>
                <li className='breadcrumb-item'>
                    <a href='/login'>LOG IN</a>
                </li>
                
            </ol>

        </header>
      
       
    }
    
}

  /*
   <li className="breadcrumb-item active">Login</li>
  */ 