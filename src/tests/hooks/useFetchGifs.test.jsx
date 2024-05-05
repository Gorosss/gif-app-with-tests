import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';



describe('Test hook useFetchGifs', () => {


    test('Returns initial state', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('Return an array of image and loading false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 20 );
        expect( loading ).toBe( false );
    });
    
    
    
})
