import React from 'react';
import {mount, shallow} from 'enzyme';
import '@testing-library/jest-dom';

import App from "../App.jsx"
import configureMockStore from 'redux-mock-store'

import {createSerializer} from 'enzyme-to-json';
import { useNavigate } from 'react-router';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { LOADING_0 } from '../ReduxToolkit/consts.js';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}))

const mockStore = configureMockStore();

describe('Test in <App />', () => {

    test('<Card/> renders', () => {

        const inner = {sunrise:"sunrise",sunset:"sunset",day_length:"day_length",lat:"lat",lng:"lng"};
        const store = mockStore({ array:{array:[inner]}});

        const jsxHeader = mount( <Provider store={store}> <App/> </Provider> );
        expect(jsxHeader.find("Card").exists);
    })

    test('<Home/> recives and creates an array of redux-state', () => {

        const inner = [{sunrise:"sunrise",sunset:"sunset",day_length:"day_length",lat:"lat",lng:"lng"},{sunrise:"sunrise2",sunset:"sunset2",day_length:"day_length2",lat:"lat2",lng:"lng2"}];
        const store = mockStore({ array:{array:inner}});

        const jsxHeader = mount( <Provider store={store}> <App/> </Provider> );
        expect(jsxHeader.find("Card").length).toEqual(2);
    })

    test('<Navbar/> doesnt search if lng and lat are filled', () => {

        const inner = [];
        const store = mockStore(
            { 
                array:{ array:inner },
                search:{ status: LOADING_0, results: {} }
            });
        
        const jsxHeader = mount( <Provider store={store}> <App/> </Provider> );
        
        jsxHeader.find("#searchBut").simulate('click');
        expect(jsxHeader.find(".searchError").at(0).text().includes("error")).toBe(true);
    })

    test('<Navbar/> searchs with lat and lng filled', () => {

        const inner = [];
        const store = mockStore(
            { 
                array:{ array:inner },
                search:{ status: LOADING_0, results: {} }
            });

        const eventLat = {
            preventDefault() {},
            target: { value: '36.7201600', getAttribute: jest.fn().mockReturnValueOnce("lat") }
        };
        const eventLng = {
            preventDefault() {},
            target: { value: '-4.4203400', getAttribute: jest.fn().mockReturnValueOnce("lng")  }
        };
        
        const jsxHeader = mount( <Provider store={store}> <App/> </Provider> );
        
        jsxHeader.find("#lat").simulate('change', eventLat);
        jsxHeader.find("#lng").simulate('change', eventLng);

        expect(jsxHeader.find("#lat").prop("value")).toEqual("36.7201600");
        expect(jsxHeader.find("#lng").prop("value")).toEqual("-4.4203400");
    })

    test('<Navbar/> self Location takes the user to <url.../search>', () => {

        const inner = [];
        const store = mockStore(
        { 
            array:{ array:inner },
            search:{ status: LOADING_0, results: {} }
        });

        const mockGeolocation = {
            getCurrentPosition: jest.fn(),
            watchPosition: jest.fn()
        };

        global.navigator.geolocation = mockGeolocation;

        const jsxHeader = mount( <Provider store={store}> <App/> </Provider> );

        jsxHeader.find("#selfLocate").simulate('click');
        expect(window.location.pathname).toEqual('/search')
    })

});

