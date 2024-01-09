import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssistantForm from "./AssistantForm";
import SpeakerForm from "./SpeakerForm";
import "./styles.css";

const FormSelector = () => {
  const [userRole, setUserRole] = useState(""); // 'assistant' or 'speaker'
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [researchStructure, setResearchStructure] = useState("");
  const [faculty, setFaculty] = useState("");
  const [status, setStatus] = useState("");
  const [thesisYear, setThesisYear] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic based on user role and form data
    if (userRole === "assistant") {
      console.log("Assistant form submitted:", {
        email,
        firstName,
        lastName,
        researchStructure,
        faculty,
        status,
        thesisYear,
        title,
      });
    } else if (userRole === "speaker") {
      console.log("Speaker form submitted:", {
        email,
        firstName,
        lastName,
        researchStructure,
        faculty,
        status,
        thesisYear,
        title,
        pdfFile,
      });
    }
  };

  const handleRoleSelection = (role) => {
    setUserRole(role);
    navigate(`/${role}`);
  };
  const redirectToAssistant = () => {
    navigate(`/assistant`);
  };
  const redirectToSpeaker = () => {
    navigate(`/speaker`);
  };

  return (
    <div>
      {userRole === "" && (
        <div>
          <h2>Select your role:</h2>
          <button className={userRole === 'assistant' ? 'selected' : ''} onClick={() => handleRoleSelection("assistant")}>
            Assistant
          </button>
          <button className={userRole === 'speaker' ? 'selected' : ''} onClick={() => handleRoleSelection("speaker")}>
            Speaker
          </button>
        </div>
      )}

      {userRole !== "" && (
        <>
          {userRole === "assistant" && (
            <AssistantForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              researchStructure={researchStructure}
              setResearchStructure={setResearchStructure}
              faculty={faculty}
              setFaculty={setFaculty}
              status={status}
              setStatus={setStatus}
              thesisYear={thesisYear}
              setThesisYear={setThesisYear}
              title={title}
              setTitle={setTitle}
            />
          )}

          {userRole === "speaker" && (
            <SpeakerForm
              handleSubmit={handleSubmit}
              email={email}
              setEmail={setEmail}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              researchStructure={researchStructure}
              setResearchStructure={setResearchStructure}
              faculty={faculty}
              setFaculty={setFaculty}
              status={status}
              setStatus={setStatus}
              thesisYear={thesisYear}
              setThesisYear={setThesisYear}
              title={title}
              setTitle={setTitle}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FormSelector;
