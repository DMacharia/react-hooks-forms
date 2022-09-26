import React, { useState } from "react";

function Form({
	firstName,
	lastName,
	handleFirstNameChange,
	handleLastNameChange,
}) {
	const [newsletter, setNewsletter] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleNewsletterChange(event) {
		setNewsletter(event.target.checked);
	}
	return (
		<>
			<form>
				<input
					type="text"
					onChange={handleFirstNameChange}
					value={firstName}
					placeholder="Enter first name"
				/>
				<input
					type="text"
					onChange={handleLastNameChange}
					value={lastName}
					placeholder="Enter second name"
				/>
				<button onSubmit={handleSubmit} type="submit">
					Submit
				</button>
			</form>
			<form>
				<label htmlFor="newsletter">Subscribe to our Newsletter?</label>
				<input
					type="checkbox"
					id="newsletter"
					onChange={handleNewsletterChange}
					/* checked instead of value */
					checked={newsletter}
				/>
				<button onSubmit={handleSubmit} type="submit">
					Submit
				</button>
			</form>
		</>
	);
}

export default Form;
