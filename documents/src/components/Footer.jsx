import React from "react";
import { useEffect, useState } from "react";

function Footer () {
    const date = new Date().toDateString();
    const [ clock, setClock ] = useState();
    useEffect( () => {
        setInterval( () => {
            const time = new Date().toLocaleTimeString();
            setClock(time);
        } );
    } );

    return (
        <div>
            <footer className="container">
                
                <div className="row justify-content-center mt-3 mb-3"> {/* start of row  */}
                    <div className="col-md-8"> {/* start of col */}
                        <h6 className="fw-bolder"> Team Member Allocation App </h6>
                        <p className="font-monospace text-center"> {clock} {date} </p>
                    </div> {/* end of col */}
                </div> {/* end of row */}
            
            </footer>
        </div>
    )
};

export default Footer;