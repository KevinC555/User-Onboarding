import * as yup from 'yup';

const formSchema = yup.object().shape({
	first_name: yup
		.string()
		.trim()
		.required('Name is required')
		.min(3, 'Name must be longer than 3 characters'),
	password: yup
		.string()
		.trim()
		.required('Password is required')
		.min(3, 'Password must be longer than 3 characters'),
	email: yup
		.string()
		.trim()
		.email('Must be a valid email address')
		.required('Email is required'),
	terms: yup
		.string()

})

export default formSchema;