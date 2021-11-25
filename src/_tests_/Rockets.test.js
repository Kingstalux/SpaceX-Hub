import React from 'react';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets';

it('matches rocket snapshot', () => {
    const tree = renderer.create(<Rockets />).toJSON();
    expect(tree).toMatchSnapshot();
})
