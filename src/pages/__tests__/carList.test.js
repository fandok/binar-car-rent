import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("carList page", () => {
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

  it("renders component and get table data", async () => {
    const Component = require("../carList").default;

    render(
      <MemoryRouter initialEntries={["/list/23"]}>
        <Routes>
          <Route path="/list/:id" element={<Component />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      const tableData = screen.getByText("Gerobak Kontes");
      expect(tableData).toBeInTheDocument();
    });
  });
});
