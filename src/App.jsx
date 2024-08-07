import React from "react";
import FileUpload from "./components/FileUpload";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Team Builder</h1>
        <p className="text-center text-gray-700 mb-6">
          Upload an {" "}
          <strong>Excel file with three sheets </strong>
          named <strong>Developer</strong>,<strong>Business Analyst</strong>,
          and <strong>Data Analyst</strong>. The application will create teams
          of 3 Developers, 1 Business Analyst, and 1 Data Analyst and generate a
          PDF.
        </p>
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
