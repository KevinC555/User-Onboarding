describe('Users App', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	const nameInput = () => cy.get('input[name=first_name')
	const passwordInput = () => cy.get('input[name=password]')
	const emailInput = () => cy.get('input[name=email]')
	const termsSelect = () => cy.get('select[name=terms]')
	const submitBtn = () => cy.get('button[id="submitBtn"]')
	const foobarInput = () => cy.get('input[name=foobar]')

	it('Sanity check to make sure that tests work', () => {
		expect(1 + 2).to.equal(3)
		expect(2 + 2).not.to.equal(5)
		expect({}).not.to.equal({}) // equal ie ===
		expect({}).to.eql({}) // eql ie ==
	})

	it('The proper elements are showing', () => {
		nameInput().should('exist')
		passwordInput().should('exist')
		emailInput().should('exist')
		termsSelect().should('exist')
		submitBtn().should('exist')
		foobarInput().should('not.exist')
	})

	describe('Submitting form', () => {
		it('Can submit the form', () => {
			cy.url().should('include', 'localhost')
		})

		it('Can type in the inputs', () => {
			nameInput()
				.should('have.value', '')
				.type('Kevin')
				.should('have.value', 'Kevin')

			passwordInput()
				.should('have.value', '')
				.type('sunny!')
				.should('have.value', 'sunny!')

			emailInput()
				.should('have.value', '')
				.type('kevin@gmail.com')
				.should('have.value', 'kevin@gmail.com')
		})

		it('The submit button enables when all inputs are filled out', () => {
			nameInput().type('Kevin')
			passwordInput().type('sunny!')
			emailInput().type('kevin@gmail.com')
			submitBtn().should('not.be.disabled')
		})

		it('The terms selector can be switched', () => {
			cy.get('select').select('Yes').should('have.value', 'terms')
		})
	})
})

