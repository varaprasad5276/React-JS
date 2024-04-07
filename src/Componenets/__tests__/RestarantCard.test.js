import { render, screen } from "@testing-library/react";
import RestarantCard from "../RestarantCard";
import { WithPromotedLabel } from "../RestarantCard";
import Mock_data from "../Mocks/RestarantCard.json";
import "@testing-library/jest-dom";

test(" should render RestarantCard component with pros Data", () => {
  render(<RestarantCard Rest_data={Mock_data} />);

  const card = screen.getByText("Mehfil");
  expect(card).toBeInTheDocument();
});

// test(" should render RestarantCard component with Promoted Label", () => {
//     // home work - test HOC :withPromotedLabel()
//   render(<WithPromotedLabel  />);
//   const promoted = screen.getByText("Promoted");
//   expect(promoted).toBeInTheDocument();
// });
