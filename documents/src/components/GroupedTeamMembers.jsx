import React from 'react';
import { useState } from 'react';
import "./style.css";

function GroupedTeamMembers ( { employees, selectedTeam, setTeam } ) {
 
  const groupedTeamMembers = () => {
    let teams = [];
    let uid1 = "id" + (new Date()).getTime();
    let uid2 = "id" + Math.random().toString(16).slice(2);
    let uid3 = "id" + Date.now().toString(36) + Math.random().toString(36).substr(2);
    let uid4 = "id" + Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    
    let teamAMembers = employees.filter( (employee) => employee.teamName === "TeamA" );
    let teamA = { team: "TeamA", members: teamAMembers, uid: uid1, collapsed: selectedTeam === "TeamA" ? false:true };
    teams.push(teamA);

    let teamBMembers = employees.filter( (employee) => employee.teamName === "TeamB" );
    let teamB = { team: "TeamB", members: teamBMembers, uid: uid2, collapsed: selectedTeam === "TeamB" ? false:true };
    teams.push(teamB);

    let teamCMembers = employees.filter( (employee) => employee.teamName === "TeamC" );
    let teamC = { team: "TeamC", members: teamCMembers, uid: uid3, collapsed: selectedTeam === "TeamC" ? false:true };
    teams.push(teamC);

    let teamDMembers = employees.filter( (employee) => employee.teamName === "TeamD" );
    let teamD = { team: "TeamD", members: teamDMembers, uid: uid4, collapsed: selectedTeam === "TeamD" ? false:true };
    teams.push(teamD);

    return teams;
  };

  const [groupedEmployees, setGroupedData] = useState( groupedTeamMembers() );
  
  const handleTeamClick = (event) => {
    let  transformedGroupData = groupedEmployees.map( (groupedData) => groupedData.team === event.currentTarget.id 
                                                                ? { ...groupedData, collapsed: !groupedData.collapsed }
                                                                : groupedData  
                                                    );
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);            
  };

  return (
    <div>
        <main className='container'>
            {
              groupedEmployees.map( (item) => {
                return (
                  <div key={item.uid} className='card mt-2 cursor-pointer'>
                    
                    <h4 id={item.team} className='card-header text-secondary bg-white' onClick={handleTeamClick}>
                      Team Name:  {item.team}
                    </h4>
                    <div id={"collapse_" + item.team} 
                      className={item.collapsed === true ? "collapse" : ""}>
                        <hr />
                      {
                        item.members.map( member => {
                          return (
                            <div key={member.id} className='mt-2'>
                              <h5  className='card-title mt-2'>
                                <span  className='text-dark'>
                                  Full Name: {member.fullName}
                                </span>
                              </h5>
                              <p  className='text-center'> Designation: { member.designation } </p>
                            </div>
                          )
                        })
                      }
                    </div>

                  </div>
                )
              })
            }
        </main>
    </div>
  )
}

export default GroupedTeamMembers;