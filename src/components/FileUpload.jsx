import React, { useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const FileUpload = () => {
  const [teams, setTeams] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: "binary" });

      console.log("Sheet Names:", workbook.SheetNames);

      const devSheet = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]]
      );
      const baSheet = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[1]]
      );
      const qaSheet = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[2]]
      );

      console.log("Developers:", devSheet);
      console.log("Business Analysts:", baSheet);
      console.log("Data Analysts:", qaSheet);

      const teams = createTeams(devSheet, baSheet, qaSheet);
      setTeams(teams);
    };

    reader.readAsBinaryString(file);
  };

  const createTeams = (devs, bas, qas) => {
    let teams = [];
    let minLength = Math.min(
      Math.floor(devs.length / 3),
      bas.length,
      qas.length
    );

    for (let i = 0; i < minLength; i++) {
      teams.push({
        devs: [devs[i * 3], devs[i * 3 + 1], devs[i * 3 + 2]],
        bas: [bas[i]],
        qas: [qas[i]],
      });
    }

    console.log("Teams:", teams);

    return teams;
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    teams.forEach((team, index) => {
      doc.text(`Team ${index + 1}`, 20, 25 + index * 60);
      doc.autoTable({
        head: [["Role", "Name"]],
        body: [
          ...team.devs.map((dev) => ["Developer", dev.Name]),
          ...team.bas.map((ba) => ["Business Analyst", ba.Name]),
          ...team.qas.map((qa) => ["Data Analyst", qa.Name]),
        ],
        startY: 30 + index * 60,
      });
    });

    doc.save("teams.pdf");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={generatePDF}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Generate PDF
      </button>
    </div>
  );
};

export default FileUpload;
