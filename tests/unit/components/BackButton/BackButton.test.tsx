import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { BackButton } from '@/components/BackButton/BackButton';

describe('BackButton', () => {
    it('Component should render correctly', () => {
        const { container } = render(<BackButton />);

        // select component root element by class name
        const rootElement = container.getElementsByClassName('bc-back-button');

        //assert the expected results
        expect(rootElement.length).toBe(1);
        expect(rootElement[0].classList.contains('bc-back-button')).toBeTruthy();
        expect(rootElement[0].classList.contains('bc-button')).toBeTruthy();
        expect(rootElement[0].classList.contains('bc-button--link')).toBeTruthy();
    });

    it('Component should trigger `onClick` function when clicked', () => {
        const onClickMockFn = jest.fn();

        render(<BackButton onClick={onClickMockFn} />);

        //select the elements you want to interact with
        const backButton = screen.getByTestId('back-button');

        //interact with those elements
        fireEvent.click(backButton);

        //assert the expected result
        expect(onClickMockFn.mock.calls).toHaveLength(1);
    });
});
