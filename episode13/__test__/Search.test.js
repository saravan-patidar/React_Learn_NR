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

// test("should be render Res components with searchBtn", async () => {
//   await act(() => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const searchBtn = screen.getByRole("button", { name: "Search" });

//   expect(searchBtn).toBeInTheDocument();
//   const searchBox = screen.getByTestId("searchBox");
//   fireEvent.change(searchBox, { target: { value: "gurukripa" } });
//   fireEvent.click(searchBtn);

//   //should load 1 card
//   const res = screen.getAllByTestId("resCard");
//   expect(res.length).toBe(2);
// });

it("should be filter res with filterBtn ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filterBtn = screen.getByRole("checkbox");
  fireEvent.click(filterBtn);
});
