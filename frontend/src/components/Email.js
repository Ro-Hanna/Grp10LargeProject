import React, { useEffect, useState } from "react";
import "./Email.css";
function Email({ Email }) {
  // local details
  const [details, setDetails] = useState({
    name: "",
    email: "",
    confrimPassword: "",
    newEmail: "",
    oldEmail: "",
  });

  // method for submitting the form
  const submitHandler = (e) => {
    // prevent the page from reloading
    e.preventDefault();

    // passes through the form details we have set via props
    Email(details);
  };
  return (
    <div className="grid-container">
      <div className="grid-item">
        <div class="grid-item">
          <form onSubmit={submitHandler}>
            <div className="form-inner">
              <h2>Update Email</h2>
              <div class="form-group">
                <label htmlFor="newEmail">New Email</label>
                <input type="text" name="newEmail" id="newEmail" />
              </div>
              <div class="form-group">
                <label htmlFor="oldEmail">Old Email</label>
                <input type="text" name="oldEmail" id="oldEmail" />
              </div>
              <h3>To verify your identity, please enter your password</h3>
              <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>
              <input type="submit" value="Save Changes" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
