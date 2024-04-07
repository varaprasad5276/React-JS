import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import RestaurantMenu from "../RestaurantsMenu";
import MOCK_DATA_NAME from "../Mocks/MockResMenu.json";
import appStore from "../../Utilities/Redux/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);
test("should load RestarantMenu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Shah Ghouse Special Haleem ( 3 )");
  fireEvent.click(accordionHeader);

  const items = screen.getAllByTestId("foodItems");
  expect(items.length).toBe(3);

  expect(screen.getByText("Cart - 0 items")).toBeInTheDocument();

  const addButtons = screen.getAllByRole("button", { name: "Add +" });
  //   expect(addButton).toBeInTheDocument();
  fireEvent.click(addButtons[0]);
  expect(screen.getByText("Cart - 1 items")).toBeInTheDocument();

  fireEvent.click(addButtons[1]);
  expect(screen.getByText("Cart - 2 items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(5); // 3 from accordionHeader and 2 from cart , because we using same component (ItemList)
  fireEvent.click(screen.getByRole("button", { name: "Clear" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(3);
  expect(screen.getByText("Your Cart is empty . Add somthing to your Cart."));
});
