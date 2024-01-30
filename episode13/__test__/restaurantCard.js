import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom";
import RestaurantCard, {
  withHighRatingLabel,
} from "../../episode12/components/RestaurantCard";

it("should be render res components with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const named = screen.getByText("Gurukripa Restaurant - Sarwate");
  expect(named).toBeInTheDocument();
});

it("should be render HighRated  components with props data", () => {
  const RestaurantsTopRated = withHighRatingLabel(RestaurantCard);
  render(<RestaurantsTopRated resData={MOCK_DATA} />);

  const price = screen.getByText("₹250 for two");
  expect(price).toBeInTheDocument();
});
