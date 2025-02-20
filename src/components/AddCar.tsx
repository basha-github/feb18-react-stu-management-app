import React from "react";
import NavBar from "./NavBar";

export default function AddCar() {
  return (
    <div>
      <NavBar />

      <form>
        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter brand name"
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Model"
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Year"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label>Img URL</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter img url"
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
