import React, { Fragment } from "react";

export const Input = (props) => {
    const { lbl, name, type, options, value, fnchange, Required, errormessage } = props;

    const fnInputControls = () => {
        switch (type) {
            case "text":
            case "email":
            case "password":
            case "number":
                return (
                    <input 
                        type={type} 
                        name={name} 
                        value={value || ""} 
                        onChange={fnchange} 
                        className="form-control"
                    />
                );

            case "radio":
                return (
                    <Fragment>
                        {options.map((opt, ind) => (
                            <Fragment key={"radio_" + ind}>
                                <input 
                                    type="radio" 
                                    name={name} 
                                    id={name + "_" + ind} 
                                    value={opt} 
                                    checked={value === opt}
                                    onChange={fnchange} 
                                />
                                <label htmlFor={name + "_" + ind} className="ms-2 me-4">{opt}</label>
                            </Fragment>
                        ))}
                    </Fragment>
                );

            case "checkbox":
                return (
                    <Fragment>
                        {options.map((opt, ind) => (
                            <Fragment key={"checkbox_" + ind}>
                                <input 
                                    type="checkbox" 
                                    name={name} 
                                    id={name + "_" + ind} 
                                    value={opt} 
                                    checked={value.includes(opt)}
                                    onChange={fnchange} 
                                />
                                <label htmlFor={name + "_" + ind} className="ms-2 me-4">{opt}</label>
                            </Fragment>
                        ))}
                    </Fragment>
                );

            default:
                return <input type={type} name={name} value={value || ""} onChange={fnchange} className="form-control" />;
        }
    };

    return (
        <div className="row mb-3">
            <div className="col-sm-5 text-end">
                <b>{Required && <span className="text-danger">*</span>} {lbl}:</b>
            </div>
            <div className="col-sm-3">{fnInputControls()}</div>
            <div className="col-sm-4 text-start">
                <b className="text-danger">{errormessage}</b>
            </div>
        </div>
    );
};
