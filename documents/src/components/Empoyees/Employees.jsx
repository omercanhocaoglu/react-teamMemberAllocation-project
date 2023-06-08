import React from "react";
import femaleProfile from "../../images/femaleProfile.jpg";
import maleProfile from "../../images/maleProfile.jpg";
import Teams from "./Teams";
import "./Employees.css";

function Employees ( {employees, selectedTeam, handleEmployeeCardClick, handleTeamSelection} ) {
    
    return (
        <main className="container">
            <div className="row justify-content-center mt-3 mb-3"> {/* start of row */}
                <div className="col-md-6"> {/* start of col */}
                    <Teams selectedTeam={selectedTeam} handleTeamSelection={handleTeamSelection}/>
                </div>
            </div>  {/* end of row */}
            
            <div className="row justify-content-center mt-3 mb-3"> {/* start of row */}
                <div className="col-md-8"> {/* start of col */}
            
                    <div className="card-collection"> {/* employees informations begin here */} 
                        { employees.map( (employee) => (
                            <div key={employee.id} id={employee.id} className={ (employee.teamName === selectedTeam ? "card m-2 standout cursor-pointer" : "card m-2 cursor-pointer") }
                            onClick={handleEmployeeCardClick} >
                                
                                { employee.gender === "male" ? <img src={maleProfile} className="card-img-top" alt="malePhoto" /> 
                                : <img src={femaleProfile} className="card-img-top" alt="femalePhoto" /> } 
                                <div className="card-body">
                                    <h5 className="card-title"> Full Name: { employee.fullName }  </h5>
                                    <p className="card-text"> <b> Designation: </b> { employee.designation } </p>
                                </div>
                            
                            </div>
                        ) ) }
                    </div> {/* employees informations ends here */} 
                
                </div> {/* end of col */}                
            </div>  {/* end of row */}    
        </main> 
    )
};


export default Employees;


