import React from "react";

const Debug = ({ debugData }) => {
  return (
    <div className="absolute bottom-3 left-3 right-3 text-white border border-slate-400 rounded-md p-2 bg-slate-700">
      <h5>Debug Window:</h5>
      <p>cityState={debugData[0]}</p>
      <p>lat={debugData[1]}</p>
      <p>long={debugData[2]}</p>
      <p>updatedOneCallURL={debugData[3]}</p>
    </div>
  );
};

export default Debug;
