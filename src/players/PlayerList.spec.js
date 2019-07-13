import React from 'react';

import {render} from '@testing-library/react'; // ONLY NEED THIS ONE !!!
// import {render, getByText} from '@testing-library/react'; // ONLY NEED THIS ONE !!!
import '@testing-library/react/cleanup-after-each'; // Automatically resets render for each test
import PlayerList from './PlayerList';


// show no players avvailable if player list is empty or not passed

describe('<Player /> component array rendering', () => {
    it('should show "No players" if not passed', () => {
        const {getByText} = render(<PlayerList/>);
        getByText(/no players to list/i);
    });




});