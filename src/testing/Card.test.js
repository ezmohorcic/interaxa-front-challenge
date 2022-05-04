import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom';
import Card from '../components/Card/Card';
import MockApp from './MockApp';
import configureMockStore from 'redux-mock-store'

import {createSerializer} from 'enzyme-to-json';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))

const mockStore = configureMockStore();

describe('Test in <Card />', () => {
    test('<Card/> se renderiza bien', () => {

        const store = mockStore({ });

        const inner = {sunrise:"sunrise",sunset:"sunset",day_length:"day_length",lat:"lat",lng:"lng"};

        const jsxHeader = shallow( <Provider store={store}> <MockApp><Card inner={inner}/></MockApp> </Provider> );
        expect(jsxHeader.find("Card").length).toEqual(1);
    })

});