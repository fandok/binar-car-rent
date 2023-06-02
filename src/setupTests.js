// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { MOCK_CAR_LIST } from "./__mocks__/index.mock";

const mock = new MockAdapter(axios);

mock
  .onGet("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
  .reply(200, MOCK_CAR_LIST);
