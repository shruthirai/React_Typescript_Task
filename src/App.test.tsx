import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

test('renders learn react link', () => {
  render(<App />);
  const header = screen.getByRole("heading", {level: 1})
  expect(header).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("render the title of counter", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("Emerson React Coding Challenge");
});
