import { fnvalidate } from "../reuseble/validation";

export const onChange = (eve,input)=>{
    const {value,name}=eve.target;
    const _input = [...input]
    let _inputobj = _input.find((obj)=>name===obj.name)
    _inputobj.value=value;
      if(_inputobj.Required){
        _inputobj = fnvalidate(_inputobj);
      }
      return _input;
}

export const fnValidateform = (input) => {
    const _input = [...input]
    const dataobj = {};
        _input.forEach((obj)=>{
            dataobj[obj.name]=obj.value
            console.log("dataobj : ",dataobj)
          if (obj.Required) 
            {
            fnvalidate(obj)
          }
        });
        console.log("dataobj : ",dataobj)
        const isValid = !_input.some((obj) => obj.errormessage)
        return [isValid,_input,dataobj];
};