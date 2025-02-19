//import React from "react";
import NavBar from "./NavBar";
import "../css/my-mar-stu.css";
import { useState } from "react";

export default function AddStudent() {

  const [rollNo,setRollNo] = useState(''); 


  const saveStu = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("submit button clicked!!!!");
    console.log("roll no--->"+rollNo);

  };

  const getRollNo = (e:any)=>{
    //console.log(e.target.value);
    setRollNo(e.target.value);
  }

  return (
    <div>
      <NavBar />

      <form onSubmit={saveStu} className="stu-add-mar">
        <div className="form-group">
          <label>RollNo</label>
          <input
            type="text"
            onChange={getRollNo}
            className="form-control"
            placeholder="Enter Roll no"
          />
        </div>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Marks</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Marks "
          />
        </div>
        <div className="form-group">
          <label>Fee</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Fee"
          />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Course"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
