import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas en componente GifExpertApp', () => {

    test('debe mostrar correctamente correctamente', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => {
        const categories = ['Dragon Ball', 'Naruto'];
        const wrapper = shallow( <GifExpertApp  defaultCategories = { categories } /> );

        expect( wrapper ).toMatchSnapshot();
        //Evaulo si tengo la misma cantidad de categorias que categories
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
    

});