import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import User from './User';
import Form from './Form';

import schema from './formSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
	first_name: '',
	password: '',
	email: '',
	terms: '',
};

const initialFormErrors = {
	first_name: '',
	password: '',
	email: '',
	terms: '',
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
	const [users, setUsers] = useState(initialUsers);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled);

	const getUsers = () => {
		axios.get('https://reqres.in/api/users')
			.then(res => {
				console.log(res);
				setUsers(res.data.data);
			}).catch(err => console.error(err))

	}

	const postNewUser = newUser => {
		axios.post('https://reqres.in/api/users', newUser)
			.then(res => {
				setUsers([res.data, ...users]);
			}).catch(err => console.error(err));
		setFormValues(initialFormValues);
	}

	const validate = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => setFormErrors({ ...formErrors, [name]: '' }))
			.catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
	}

	const inputChange = (name, value) => {
		validate(name, value)
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const formSubmit = () => {
		const newUser = {
			first_name: formValues.first_name.trim(),
			password: formValues.password.trim(),
			email: formValues.email.trim(),
			terms: formValues.terms,
		}
		postNewUser(newUser);
	}

	useEffect(() => {
		getUsers()
	}, [])

	useEffect(() => {
		schema.isValid(formValues).then(valid => setDisabled(!valid))
	}, [formValues])

	return (
		<div>
			<h1>Users App</h1>
			<Form
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{
				users.map((user, index) => {
					return (
						<User key={index} details={user} />
					)
				})
			}
		</div>
	)

}

