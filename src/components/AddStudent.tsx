import React from 'react'
import NavBar from './NavBar'

export default function AddStudent() {
  return (
    <div>
      <NavBar />
      
      <form>
  
  <div className="form-group">
    <label >RollNo</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter Roll no" />
   </div>

  <div className="form-group">
    <label >Name</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter Name" />
   </div>
  <div className="form-group">
    <label >Marks</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter Marks " />
   </div>
  <div className="form-group">
    <label >Fee</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter Fee" />
   </div>
  <div className="form-group">
    <label >Course</label>
    <input type="text" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="Enter Course" />
   </div>
  
  
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
      
      
      </div>
  )
}
