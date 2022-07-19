import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentCompoent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastChange(e) {
    setLastName(e.target.value);
  }

  return(
    <div>
    <Form>
        firstName={firstName}
        lastName={lastName}
        handleFirstChange={handleFirstChange}
        handleLastChange={handleLastChange}
    </Form>
    <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  )
}

export default ParentCompoent;