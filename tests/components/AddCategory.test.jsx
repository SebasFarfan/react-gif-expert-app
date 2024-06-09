import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Goku" } });
    expect(input.value).toBe("Goku");
    // screen.debug();
  });

  test("Debe llamar llamar a onNewCategory si el input tiene un valor", () => {
    const inputValue = "Goku";
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "Goku" } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    // screen.debug();

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar a onNewCategory si el input está vacío", () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    
    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();

  });
});
