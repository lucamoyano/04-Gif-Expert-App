import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Prueba en el useFetchGifs', () => {

    test('debe retornar el estado inicial', async () => {
        //Obtener el resultado iniciado del hooks utilizando renderHook
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' )); 
        const { data, loading } = result.current

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe( true );
    });
    
    test('debe retornar un arreglo de imagenes y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Goku' )); 
        await waitForNextUpdate();
        
        const { data, loading } = result.current

        expect( data.length ).toEqual( 10 );
        expect( loading ).toBe( false );
    })
    

})