import React from "react";
import { useState } from "react";

export default function Test() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [researchStructure, setResearchStructure] = useState("");
  const [faculty, setFaculty] = useState("");
  const [status, setStatus] = useState("");
  const [thesisYear, setThesisYear] = useState("");
  const [title, setTitle] = useState("");
  const [paperFile, setPaperFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <h3>Form Submission</h3>
        <div className="row">
          {/* First Row */}
          <div className="col-md-4">
            <div className="form-group">
              <label>
                E-mail address<span className="required-field">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                First Name<span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                Last Name<span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {/* Second Row */}
          <div className="col-md-4">
            <div className="form-group">
              <label>Research Structure</label>
              <input
                type="text"
                className="form-control"
                value={researchStructure}
                onChange={(e) => setResearchStructure(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                Faculty/University<span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                Status<span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          {/* Third Row */}
          <div className="col-md-4">
            <div className="form-group">
              <label>Thesis Year</label>
              <input
                type="text"
                className="form-control"
                value={thesisYear}
                onChange={(e) => setThesisYear(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                Title<span className="required-field">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>
                PDF file<span className="required-field">*</span>
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
