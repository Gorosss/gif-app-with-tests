import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('Test <GifGridItem />', () => {

    const title = 'Title';
    const url   = 'https://localhost';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    
    test('It must show the component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('It must have a title in a p', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    })

    test('It must have the image matching the URL and alt props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });


    test('It must have animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    
    
    
    

})
