import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Test <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    
    test('Show correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('Change textBox', () => {

        const input = wrapper.find('input');
        const value = 'Test';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );
        
    })

    test('Should not post the information with submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();

    })
    
    test('Should call setCategories and clear the text box', () => {

        const value = 'Test';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  );

        expect( wrapper.find('input').prop('value') ).toBe('');

        
    })
    
    

})
