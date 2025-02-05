import User from "../pages/User";
import { render, waitFor, screen } from "@testing-library/react";

it("testing api data", async () => {
  const { getByTestId } = render(<User />);

  await waitFor(() => {
    // expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
    expect(getByTestId("text")).toHaveTextContent("Leanne Graham");
  });
});
