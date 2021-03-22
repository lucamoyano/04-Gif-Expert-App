import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('Prueba en componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories} /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories} /> );
    });

    test('debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.props().onChange({target: {value} });
        //input.simulate('change',{target: {value} }); //tambien se puede hacer con simulate
        expect( wrapper.find('p').text().trim() ).toBe(value)
    });

    test('NO debe de poster la informacion onSubmit', () => {
        //wrapper.find('form').simulate('submit', {preventDefault()})
        wrapper.find('form').props().onSubmit({ preventDefault(){} })

        //No se haya llamado (not) 
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe llamar el setCategories y limpiar la caja del texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        //1. Simular el input change
        input.props().onChange({target: {value} });

        //2. Simular el submit
        wrapper.find('form').props().onSubmit({ preventDefault(){} });

        //3. setCtegories debe ser llamado 
        //y que sea una función. setCategories( c => [inputValue, ...c]);
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        //4. el valor del input debe ser ''
        expect( input.prop('value') ).toBe('');
    })
    
    
})