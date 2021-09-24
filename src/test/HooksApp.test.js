import { shallow } from "enzyme";

import HooksApp from "../HooksApp";

describe('Pruebas en en componente <HooksApp />', () => {

    test('Debe mostrar el componente correctamente', () => {

        const wrapper = shallow( <HooksApp /> );

        expect( wrapper ).toMatchSnapshot();
        
    });
    

});
