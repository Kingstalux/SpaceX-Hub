import React from 'react';
import renderer from 'react-test-renderer';
import Profile from '../components/Profile';

it('matches rocket snapshot', () => {
    const profile = renderer.create(<Profile />).toJSON();
    expect(profile).toMatchSnapshot();
})
