import React from 'react';
import renderer from 'react-test-renderer';
import HomeDetailsScreen from '../screens/HomeDetails';

test('renders correctly', () => {
  const tree = renderer.create(<HomeDetailsScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
