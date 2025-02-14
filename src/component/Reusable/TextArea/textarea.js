import React from 'react'

export const Textarea = (props) => {
    const {lbl,name,fnchange,Required,errormessage}=props;
  return (
    <div className='row mb-3'>
      <div className='col-sm-5 text-end'>
      <b> {Required && <span className='text-danger'>*</span>} {lbl} : </b>
      </div>
        <div className='col-sm-3'>
        <textarea onChange={fnchange} name={name} className='form-control'></textarea>
        </div>
        <div className='col-sm-4 text-start'>
              <b className='text-danger'>{errormessage}</b>
          </div>
    </div>
  )
}
