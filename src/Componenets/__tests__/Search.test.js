import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MockRestroData from "../Mocks/MockRestroDat.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockRestroData);
    },
  });
});

test("should Search Res List for Barbeque text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch=screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput=screen.getByTestId("searchInput");

  fireEvent.change(searchInput,{target :{value:"Barbeque"}});
  fireEvent.click(searchBtn);

  // screen should load 1 cards for Barbeque search based on what data we have in MockRestroData ,if search wrong data then test get failed.
  const cardsAfterSearch=screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

test("should filter Top Rated  Restarants", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    const cardsBeforeFilter=screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(9);
  
    const topRatedRestrobtn=screen.getByRole("button",{name:"Top Rated"});
    fireEvent.click(topRatedRestrobtn);
  
    const cardsAfterFilter=screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
  });