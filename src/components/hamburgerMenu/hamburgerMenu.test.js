import { screen, render } from "@testing-library/react";
import Hamburgermenu from "./hamburgerMenu";
import { Provider } from "react-redux";
import store from "../../redux/store";
import user from "@testing-library/user-event";

describe("hamburger menu component", () => {
  test("renders properly", () => {
    render(
      <Provider store={store}>
        <Hamburgermenu />
      </Provider>
    );
    const hamburgerMenu = screen.getByTestId("hamburgerMenuButton-element");
    expect(hamburgerMenu).toBeInTheDocument();
  });
  test("should not be active on initial load", () => {
    render(
      <Provider store={store}>
        <Hamburgermenu />
      </Provider>
    );
    const hamburgerMenu = screen.getByTestId("hamburgerMenuButton-element");
    expect(hamburgerMenu).not.toHaveClass("active");
  });
  test("should be active on click", async () => {
    render(
      <Provider store={store}>
        <Hamburgermenu />
      </Provider>
    );
    const hamburgerMenu = screen.getByTestId("hamburgerMenuButton-element");
    await user.click(hamburgerMenu);
    expect(hamburgerMenu).toHaveClass("active");
  });
  test("should close on double click", async () => {
    render(
      <Provider store={store}>
        <Hamburgermenu />
      </Provider>
    );
    const hamburgerMenu = screen.getByTestId("hamburgerMenuButton-element");
    await user.dblClick(hamburgerMenu);

    expect(hamburgerMenu).not.toHaveClass("active");
  });
});
