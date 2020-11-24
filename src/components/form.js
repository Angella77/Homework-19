import React from "react";
import "./style.css";


function Form(props) {

    return (
        <div>
            <br></br>
            <h1>Employee Directory</h1>
            <br></br>
            <h3>Enter an employee's first name below and click 'Find'</h3>

            <div class="entertext">
                <form className="form">

                    <input
                        value={props.firstName}
                        name="firstName"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Names - case sensitive"
                    />
                    <br></br>
                    <button onClick={props.handleFormSubmit}>Find</button>
                </form>
            </div>
            <br></br>
            <h5>Or click the 'Sort Names' button to sort employees alphabetically</h5>
        </div>
    );

}

export default Form;
