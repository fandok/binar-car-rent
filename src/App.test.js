import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(<App />);
  const titleText = screen.getByText(
    "Sewa & Rental Mobil Terbaik di kawasan Medan"
  );
  expect(titleText).toBeInTheDocument();
});
