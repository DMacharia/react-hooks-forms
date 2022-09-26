import React, { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	function handleFirstNameChange(event) {
		// console.log(e.target.value);
		setFirstName(event.target.value);
	}

	function handleLastNameChange(event) {
		setLastName(event.target.value);
	}

	return (
		<>
			<Form
				firstName={firstName}
				lastName={lastName}
				handleFirstNameChange={handleFirstNameChange}
				handleLastNameChange={handleLastNameChange}
			/>
			<DisplayData firstName={firstName} lastName={lastName}/>
		</>
	);
}

export default ParentComponent;
