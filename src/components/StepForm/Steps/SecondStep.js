import React from "react";


function SecondStep() {
    return(
        <div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Emri i adreses</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        </div>
    );
}

export default SecondStep;