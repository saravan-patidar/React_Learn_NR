import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Body from "../../episode12/components/Body";
import MOCK_DATA from "../mockData/resListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should be render Res components with searchBtn", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
  const searchBox = screen.getByTestId("searchBox");
  fireEvent.change(searchBox, { target: { value: "gurukripa" } });
  fireEvent.click(searchBtn);

  //should load 1 card
  const res = screen.getAllByTestId("resCard");
  expect(res.length).toBe(2);
});

it("should be search Input text not found", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchBox = screen.getByTestId("searchBox");
  fireEvent.change(searchBox, { target: { value: "guruji ka dhaba" } });
  fireEvent.click(searchBtn);
  const resFoundNot = screen.getByText("Restaurants not found !");
  expect(resFoundNot).toBeInTheDocument();
});

it("should be search empty then click", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const searchInput = screen.getByTestId("searchBox");
  const searchBtn = screen.getByRole("button", { name: "Search" });
  fireEvent.change(searchInput, { target: { value: "" } });
  fireEvent.click(searchBtn);
  const resCount = screen.getAllByTestId("resCard");
  expect(resCount.length).toBe(9);
});

it("should be filter res with filterBtn ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const resCard1 = screen.getAllByTestId("resCard");
  expect(resCard1.length).toBe(9);

  const filterBtn = screen.getByRole("checkbox");

  fireEvent.click(filterBtn);

  const resCard = screen.getAllByTestId("resCard");
  expect(resCard.length).toBe(2);
});
