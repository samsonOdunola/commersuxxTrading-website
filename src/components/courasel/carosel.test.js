import { screen, render } from "@testing-library/react";
import Carosel from "./carosel";
import { Provider } from "react-redux";
import store from "../../redux/store";
import user from "@testing-library/user-event";

describe("Carousel component", () => {
  test("renders correctly", () => {
    render(<Carosel />);
    const carouselElement = screen.getByTestId("carouselElement");
    expect(carouselElement).toBeInTheDocument();
  });
});
