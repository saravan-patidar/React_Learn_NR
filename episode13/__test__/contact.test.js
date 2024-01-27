import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// test() === it()
// describe() is used to group of test cases.

describe("Contact page has to test cases", () => {
  test("should be load heading on contact component", () => {
    render(<Contact />);
    // Querrying
    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("should be load input on Contact component", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });

  test("should be load placeholder inside input ", () => {
    render(<Contact />);

    const placeholderBox = screen.getByPlaceholderText("name");

    expect(placeholderBox).toBeInTheDocument();
  });
});

// Header Components test
import Header from "../../episode12/components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../episode12/utils/appStore";

describe("header components tests are here", () => {
  it("should be render header components to as a login", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();
  });

  it("should be check online  ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const onlineStatus = screen.getByText("Online: 🟢");

    expect(onlineStatus).toBeInTheDocument();
  });
  it("should be check button is login or logout to be worked ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    // const logoutButton = screen.getByText("Login");

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });

  it("should be check About text as regexForm", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const regexWay = screen.getByText(/Ab/);

    expect(regexWay).toBeInTheDocument();
  });
});
