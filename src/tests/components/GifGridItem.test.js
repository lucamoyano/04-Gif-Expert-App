import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('Pruebas en componente GifGridItem', () => {

    const title = 'Un titulo';
    const url = 'https://url.com';
    let wrapper = shallow( <GifGridItem title={title} url={url} />  );

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p').text().trim();
        expect(p).toBe(title);
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        let b = div.prop('className');

        expect (b.includes('animate__fadeIn')).toBe(true);
    });

});