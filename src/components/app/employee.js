import React from "react";
import "./style.css";

function employee(props) {
    //Condition if statement and Map function to loop through array

    return (
        <div>
            {props.employeeList.length ? (
                <ul className="list-group">

                    {props.employeeList.map(result => (
                        <li className="list-group-item" key={result.id}>
                            <div id="name"><b>Name: </b>{result.firstName} {result.lastName}
                                <br></br>
                                <b>Title: </b> {result.type}</div>
                            <div id="other"><i>Email: </i> {result.email}
                                <br></br>
                                <i>Phone Number: </i> {result.phone}</div>
                        </li>
                    ))}
                </ul >
            ) : (
                    <h2>Sorry No Employee by that name</h2>
                )}
        </div>
    )
}

export default employee;