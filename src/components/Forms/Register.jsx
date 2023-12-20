import React, { useState } from "react";
import './Register.css';

const Register = () => {
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
    <form onSubmit={handleSubmit} className="container d-flex flex-column">
        <h3>Form Submission</h3>
      <div className="form-group">
        <label>E-mail address<span className="required-field">*</span></label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>First Name<span className="required-field">*</span></label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last Name<span className="required-field">*</span></label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Research Structure</label>
        <input
          type="text"
          className="form-control"
          value={researchStructure}
          onChange={(e) => setResearchStructure(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Faculty/University<span className="required-field">*</span></label>
        <input
          type="text"
          className="form-control"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Status<span className="required-field">*</span></label>
        <input
          type="text"
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Thesis Year</label>
        <input
          type="text"
          className="form-control"
          value={thesisYear}
          onChange={(e) => setThesisYear(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Title<span className="required-field">*</span></label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <div class="mb-3">
          <label for="formFile" className="form-label">
            PDF file<span className="required-field">*</span>
          </label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        {/* <label>Paper File:</label>
        <input
          type="file"
          className="form-control-file"
          onChange={(e) => setPaperFile(e.target.files[0])}
        /> */}
      </div>

      <button type="submit" className="btn btn-primary submit-btn">
        Submit
      </button>
    </form>
  );
};

export default Register;
