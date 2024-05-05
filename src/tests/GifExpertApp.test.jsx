import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Test <GifExpertApp />', () => {
    
    test('Have to show the component correctly', () => {

        const wrapper = shallow(<GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('It should display a list of categories', () => {

        const categories = ['One piece', 'Cat'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

        
    })
    
    

})
