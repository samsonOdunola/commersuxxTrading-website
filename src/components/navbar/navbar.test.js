import { screen, render } from "@testing-library/react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Navbar component", () => {
  test("renders properly", () => {
    render(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
    const NavBar = screen.getByRole("navigation");
    expect(NavBar).toBeInTheDocument();
  });
});
