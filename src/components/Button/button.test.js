import React from "react";
import { Button } from "./button.component";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";

describe("Button component", () => {
  // test component with props
  it("Button renders correctly all Props", () => {
    const tree = renderer
      .create(
        <Button
            ariaLabel="test"
            href="https://www.google.com"
            target="_blank"
            text="test"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  afterEach(cleanup);
});