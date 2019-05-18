// Test away!
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {
	it('should run Display tests', () => {
		expect(true).toBe(true);
	});

	it('matches snapshot', () => {
		const tree = renderer.create(<Display />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
