import React from "react";
import "./style.css";

const Header = ( { teamMemberCount, selectedTeam } ) => {
    
    return (
        <header>
            <div className="container"> {/* start of container  */}
                <div className="row justify-content-center mt-3 mb-3"> {/* start of row  */}
                    <div className="col-md-8 shadow-lg p-3 mb-5 bg-body-tertiary rounded"> {/* start of col */}
                        
                        <h1> Team Member Allocation </h1>
                        <h3> This {selectedTeam} has 
                            <span className="text-danger"> {teamMemberCount} </span> { teamMemberCount === 1 ? "member" : "members" } 
                        </h3>
                    
                    </div> {/* end of col */}
                </div> {/* end of row */}
            </div> {/* end of container */}
        </header>
    )
};

export default Header;