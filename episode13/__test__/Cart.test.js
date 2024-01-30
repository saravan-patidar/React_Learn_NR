import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantsMenu from "../../episode12/components/RestaurantsMenu";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mockData/resMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../episode12/utils/appStore";
import Header from "../../episode12/components/Header";
import Cart from "../../episode12/components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should be render resMenu card", async () => {
  await act(() => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantsMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accrodianHeader = screen.getByText("Salads (3)");
  expect(accrodianHeader).toBeInTheDocument();
  fireEvent.click(accrodianHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);

  const addBtn = screen.getAllByRole("button");
  fireEvent.click(addBtn[1]);
  const cart = screen.getByTestId("cart");
  expect(cart).toBeInTheDocument();

  //   const itemlist = screen.getAllByTestId("itemlist");
  //   expect(itemlist.length).toBe(1);
  const carttext = screen.getByText("Clear Cart");
  expect(carttext).toBeInTheDocument();
});
