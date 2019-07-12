import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react'; // ONLY NEED THIS ONE !!!

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

})


