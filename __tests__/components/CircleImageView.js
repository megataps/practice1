import 'react-native';
import React from 'react';
import CircleImageView from 'components/CircleImageView/CircleImageView';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CircleImageView
      iconUrI={require('assets/images/check_red.png')}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
