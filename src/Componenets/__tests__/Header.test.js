import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import appStore from "../../Utilities/Redux/appStore";
import { act } from "react-dom/test-utils";

it("should load Header Component with a Log In button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log In" });
  expect(loginButton).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Log In" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Log Out" });

  expect(logoutButton).toBeInTheDocument();
});

it("should load Header Component with a cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const caerItems = screen.getByText("Cart - 0 items");
  expect(caerItems).toBeInTheDocument();
});

it("should load Header Component with a cart items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // we can use Regex also for getByText
  const caerItems = screen.getByText(/Cart/);
  expect(caerItems).toBeInTheDocument();
});

test("should check online status", () => {
  // await act(async () =>
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const onlineStatus = screen.getByText("Online Status:✅");
  expect(onlineStatus).toBeInTheDocument();

  const logo=screen.getByTestId("logo");
  expect(logo).toBeInTheDocument()

  const logIn=screen.getByRole("button",{name:"Log In"});
  expect(logIn).toBeInTheDocument()
});
