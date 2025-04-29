import { render } from "@testing-library/react";
import Saudacao from "../components/Saudacao";

test("Saudacao component renders correctly", () => {
  render(<Saudacao nome="Lucas" />);

  const titulo = screen.getByText("Olá, Lucas!");

    expect(titulo).toBeInTheDocument();
}
);