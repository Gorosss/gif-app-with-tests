import { getGifs } from '../../apis/getGifs';


describe('Test getGifs Fecth', () => {
    
    test('It have to return 10 elements', async() => {
        
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBe( 20 );

    })

    test('It have to return 0 elements', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    

})


