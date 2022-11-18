import { render } from "@testing-library/react";
import { GifItem } from "../../../src/components/GifItem";

describe('Pruebas en <GifItem />', () => { 
    test('debe hacer match con el snapShot',()=>{
        const title='Saitama';
        const url= 'https://one-punch.com/saitama.jpg';

       const {container}= render(<GifItem title={title} url={url} />);
       expect(container).toMatchSnapshot();

    });
 });