import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Drango Ball'));
        // console.log(result);
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe regresar un arreglo de imagenes e isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Drango Ball'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {timeout: 6000}
        );

        // console.log(result.current);

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})