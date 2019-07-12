import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'; // ONLY NEED THIS ONE !!!
import '@testing-library/react/cleanup-after-each'; // Automatically resets render for each test

describe('here comes <App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render without errors', () => {
    // if there are errors rendering the component, it will fail
    render(<App/>);
  })

  it('render with failing', () => {
   // if there are errors rendering the component, it will fail
    render(<App/>);
  } )

  it.todo('does this work?');

  it('should show an h2 component with text "Something" ', () => {
    const testDOM = render(<App/>);
    testDOM.getByText(/something/i);  // i means case-insenstive
  })

  // ANOTHER way to use getByText with destructuring 
  //  something added here
  it('ALT WAY >> should shows an h2 component with text "something"', () => {
    const {getByText} = render(<App/>);  // deconstructed !!!
    getByText(/something/i);
  })


})


