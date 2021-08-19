import React from 'react';

function User({ details }) {
	if (!details) {
		return <h3>Working fetching your user details...</h3>
	}

	return (
		<div>
			<h2>{details.first_name}</h2>
			<p>Password: {details.password}</p>
			<p>Email: {details.email}</p>
			<p>Terms: {details.terms}</p>

			{/* {
				!!details.terms && !!details.terms.length &&
				<div>
					Terms:
					<ul>
						{details.terms.map((terms, index) => <li key={index}>{terms}</li>)}
					</ul>
				</div>
			} */}
		</div>
	)
}

export default User;