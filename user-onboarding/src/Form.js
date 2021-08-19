import React from 'react';

export default function Form(props) {
	const {
		values,
		submit,
		change,
		disabled,
		errors,
	} = props

	const onSubmit = evt => {
		evt.preventDefault()
		submit()
	}

	const onChange = evt => {
		const { name, value, checked, type } = evt.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse)
	}

	return (
		<form onSubmit={onSubmit}>
			<div>
				<h2>Add a User</h2>
				<button id="submitBtn" disabled={disabled}>submit</button>

				<div>
					<div>{errors.first_name}</div>
					<div>{errors.password}</div>
					<div>{errors.email}</div>
					<div>{errors.terms}</div>
				</div>
			</div>
			<div>
				<h4>General Information</h4>
				<label>Name
					<input
						value={values.first_name}
						onChange={onChange}
						name='first_name'
						type='text'
					/>
				</label>

				<label>Password
					<input
						value={values.password}
						onChange={onChange}
						name='password'
						type='text'
					/>
				</label>

				<label>Email
					<input
						value={values.email}
						onChange={onChange}
						name='email'
						type='text'
					/>
				</label>

				<label>Terms
					<select
						onChange={onChange}
						value={values.terms}
						name='terms'
					>
						<option value=''>- Select an option -</option>
						<option value='terms'>Yes</option>
						<option value='terms'>No</option>
					</select>
				</label>
			</div>
		</form>
	)

}