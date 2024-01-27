import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mockData/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard, {
  withHighRatingLabel,
} from "../../episode12/components/RestaurantCard";

it("should be render res components with props data", () => {
  render(<RestaurantCard resdata={MOCK_DATA} />);

  const name = screen.getByText("Gurukripa Restaurant - Sarwate");
  expect(name).toBeInTheDocument();
});

// it("should be render HighRated  components with props data", () => {
//   render(<RestaurantCard resdata={MOCK_DATA} />);

//   const name = screen.getByText("Gurukripa Restaurant - Sarwate");
//   expect(name).toBeInTheDocument();
// });
