"use client";
import React, { useState } from 'react';
import { Textarea } from "@/component/Reusable/TextArea";
import { Input } from "@/component/Reusable/input";
import { Select } from "@/component/Reusable/Select";
import { inputcantrols } from "@/component/questions/configuration";
import { onChange, fnValidateform } from "@/include/reuseble/forms";
import { serverCall } from "@/include/reuseble/serverCall";

export const Question = () => {
  const [input, setinput] = useState(inputcantrols);
  const [datao,setdata] = useState();

  const fnchange = (eve) => {
    const _input = onChange(eve, input);
    setinput(_input);
    console.log("_input0 : ",_input)
  };

  const fnsubmit = async () => {
    var [isValid, _input, dataobj] = fnValidateform(input);
    setdata(dataobj);
    if (!isValid) {
      setinput(_input);
      console.log("Submitting Data:", datao);
      return;
    }
    
    console.log("_inputs : ",_input)
    console.log("Submitting Data:", datao);

    try {
      const res = await serverCall.sendpost("/api/que/save", { data:dataobj });
      console.log("Response:", res.data);

      if (res.data.acknowledged) {
        alert("Question saved successfully!");
      } else {
        alert("Failed to save question");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="mt-3 container-fluid">
      {input.map((obj, ind) => {
        const attr = { ...obj, fnchange };
        switch (obj.tag) {
          case "input":
            return <Input key={"input_" + ind} {...attr} />;
          case "textarea":
            return <Textarea key={"textarea_" + ind} {...attr} />;
          case "select":
            return <Select key={"select_" + ind} {...attr} />;
          default:
            return null;
        }
      })}
      <div className="row mt-3">
        <div className="offset-5 col-sm-7">
          <button onClick={fnsubmit} className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
};
