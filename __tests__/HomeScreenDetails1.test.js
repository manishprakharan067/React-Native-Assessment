import React from 'react';
import {Platform, NativeModules} from 'react-native';
import HomeScreen from '../screens/Home';
import Data from '../Data.json';
import configureStore from 'redux-mock-store';
import {render} from '@testing-library/react-native';

const INITIAL_STATE = {ResultData: Data.results};
const mockStore = configureStore([]);
const store = mockStore(INITIAL_STATE);

jest.useFakeTimers();
test('renders correctly', async () => {
  Platform.OS = 'ios';
  NativeModules.RNInternet = {
    findEvents: jest.fn(),
  };
  render(<HomeScreen {...INITIAL_STATE} />);
});
