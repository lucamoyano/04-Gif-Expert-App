import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //Fingir llamadas al useFetchGifs


describe('Pruebas en componente GifGrid', () => {

    const category = 'Goku';

    test('debe mostrar el componente GifGrid correctamente', () => {
        //Falsear la data, para evitar el error del mock
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        });

        const wrapper = shallow( <GifGrid category = {category} /> )
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        //Falsear la data, cuando obtengo una respuesta
        const gifs = [{
            id: 'ABC',
            url: 'https://url.com/image.png',
            title: 'Test'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        });

        const wrapper = shallow( <GifGrid category = {category} /> )
        
        expect( wrapper ).toMatchSnapshot();
        //Evaluar si existen componentes
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    })
    
    

})