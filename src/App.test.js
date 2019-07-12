import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, fireEvent} from '@testing-library/react'; // ONLY NEED THIS ONE !!!
import '@testing-library/react/cleanup-after-each'; // Automatically resets render for each test
import { jsxSpreadAttribute, exportAllDeclaration } from '@babel/types';
import { Decipher } from 'crypto';
import { get } from 'http';


describe('here comes <App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('render App without errors', () => {
    // if there are errors rendering the component, it will fail
    render(<App/>);
  })

  it('render App with failing', () => {
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

  describe('Greet button ', () => {
    it('says hello to developers', () => {
      const {getByText, queryByText} = render(<App/>);
      // find button
      const button = getByText(/greet/i);
      // click it
      fireEvent.click(button)
      // confirm that 'hello developers' is there
      const queryTest = queryByText(/greet/i);// passes
      const queryTestNOT = queryByText(/NOPE/i);// passes
      expect(queryTest).toBeTruthy();
      expect(queryTestNOT).not.toBeTruthy();
    })
    
    
    
  })


})


