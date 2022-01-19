import { shallow } from 'enzyme';
import React from 'react';

import App from '../../src/App';

describe('App component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App />);

        expect(wrapper).toMatchSnapshot();
        wrapper.unmount();
    });
});
