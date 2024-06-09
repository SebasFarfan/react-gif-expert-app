import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas sobre <GifItem />", () => {
    const title = 'dragon ball';
    const url = 'https://dragon-ball.com/';
  test("Debe hacer match con el snapshot", () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe Mostrar la imagen con la URL y el ALT indicado', () => { 
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const {src,alt} = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
   })
});
