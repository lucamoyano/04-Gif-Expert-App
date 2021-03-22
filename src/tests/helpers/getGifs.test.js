import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs fetch', () => {

    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Goku');

        expect( gifs.length ).toBe(10);

    });
})