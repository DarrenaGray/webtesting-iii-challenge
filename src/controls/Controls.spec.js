// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
	it('should run Controls tests', () => {
		expect(true).toBe(true);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Controls />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
