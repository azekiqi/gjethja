import React from "react";

function DynamicForm({inputs}) {
        return(
            <div>
                {inputs.map(input => {
                    return(
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                    )
                })}
            </div>
        )
}