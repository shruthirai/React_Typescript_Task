import { render, screen } from '@testing-library/react';
import App from './App';
import { Button } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('renders learn react link', () => {
  render(<App />);
  const header = screen.getByRole("heading", {level: 1})
  expect(header).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("render the title", () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain("Emerson React Coding Challenge");
});

it("Expects to run onClick function when button is pressed in the DOM", () => {
  const mockCallBackClick = jest.fn();
  const wrapper = shallow(<Button onClick={mockCallBackClick} className="test"/>);
  wrapper.find('button').simulate('click');
  expect(mockCallBackClick.mock.calls.length).toEqual(1);
});
