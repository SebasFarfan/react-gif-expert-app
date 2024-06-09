import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe("Prubas sobre <GifGrid />", () => {
  const category = "Dragon Ball";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...."));
    expect(screen.getByText(category));
    screen.debug();
  });

  test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
    const gifs = [
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/Goku.jpg'
        },
        {
            id: 'ABC',
            title: 'Goku Black',
            url: 'https://localhost/Goku-Black.png'
        }
    ];

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);

   })
});
