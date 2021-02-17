import { render } from '@testing-library/react';
import React from 'react';
import { PersonForm } from '../personForm/personForm';


describe("simple person form",() =>{

    it("shows name label",() => {
        const component = render(<PersonForm/>);

        expect(component.getByText('Name:')).toBeInTheDocument();        
    })
})