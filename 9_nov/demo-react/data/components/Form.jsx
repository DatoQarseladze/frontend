import React from 'react';


function Form ({onSubmit}){
let input = null;

const handlerSubmit = event =>{
e.preventDefault();
onSubmit({title:input.value})
input.value = ''
}

return (
    <form onSubmit={handlerSubmit}>
         <div className='input-group'>
            <input type="text" className='form-control form-control-sm' />
            <span className='input group-btn'>
                <button>Save</button>
            </span>
         </div>
    </form>
)
}

export default Form;