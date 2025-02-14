import React from 'react'

export const Select = (props) => {
    const {lbl,name,options,fnchange,Required,errormessage}=props;
  return (
    <div className='row mb-3'>
      <div className='col-sm-5 text-end'>
      <b> {Required && <span className='text-danger'>*</span>} {lbl} : </b>
      </div>
      <div className='col-sm-3'>
      <select onChange={fnchange} name={name} className='form-control'>
            <option value="">Please Select</option>
            {
                 options.map((val,ind)=>{
                    return <option key={"option_"+ind}>{val}</option>
                 })
            }
        </select>
      </div>
      <div className='col-sm-3 text-start'>
              <b className='text-danger'>{errormessage}</b>
          </div>
    </div>
  )
}
