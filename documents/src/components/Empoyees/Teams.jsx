import React from 'react';

function Teams ( { selectedTeam, handleTeamSelection } ) {
  return (
    <main>
        <select className="form-select form-select-md" value={selectedTeam} onChange={handleTeamSelection}>
            <option value="TeamA"> Team A </option>
            <option value="TeamB"> Team B </option>
            <option value="TeamC"> Team C </option>
            <option value="TeamD"> Team D </option>
        </select>
    </main>
  )
};

export default Teams;