import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { App } from "./app";
import RegisterCardForm from "./components/RegisterCardForm";

describe("Dummy test", () => {
  it.skip("should display welcome text", () => {
    render(<App />);
    const heading = screen.queryByRole("heading", {
      level: 1,
    });

    expect(heading).toBeInTheDocument();
    expect(heading).toContainHTML("Welcome to your technical test!");
  });

});

describe("RegisterCardForm Component", () => {
  it("should render RegisterCardForm", () => {
    render(<RegisterCardForm />);
    expect(screen.getByText("Register card form")).toBeInTheDocument();
    expect(screen.getByLabelText("register-card-form-menu-button")).toBeInTheDocument();
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Credit card number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CVC")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("expiry")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("should render MenuContent when menu button is clicked", () => {
    render(<RegisterCardForm />);
    const menuButton = screen.getByLabelText("register-card-form-menu-button");
    fireEvent.click(menuButton);
    expect(screen.getByText(/This is menu content/i)).toBeInTheDocument();
    expect(screen.getByLabelText("menu-go-back-button")).toBeInTheDocument();
  });

  it("should go back to RegisterCardForm when Back button is clicked", () => {
    render(<RegisterCardForm />);
    const menuButton = screen.getByLabelText("register-card-form-menu-button");
    fireEvent.click(menuButton);
    const goBackButton = screen.getByLabelText("menu-go-back-button");
    fireEvent.click(goBackButton);
    expect(screen.getByText(/Register card form/i)).toBeInTheDocument();
    expect(screen.getByLabelText("register-card-form-menu-button")).toBeInTheDocument();
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Credit card number")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("CVC")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("expiry")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});