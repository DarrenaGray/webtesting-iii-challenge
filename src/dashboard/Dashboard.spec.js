// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
	it('should run Dashboard tests', () => {
		expect(true).toBe(true);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Dashboard />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
