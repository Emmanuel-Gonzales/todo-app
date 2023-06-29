import { useEmotionCache } from '@mantine/core';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '.';

describe('Settting Context', () => {
  test('provides initial state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
        {
        ({sort, showComplete, displayCount}) => {
          return (
            <>
            <div data-testid="displayCount">{displayCount}</div>
            <div data-testid="showComplete">{showComplete.toString()}</div>
            <div data-testid="sort">{sort}</div>
            </>
          )
        }
        }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
    const displayCount = screen.getByTestId('displayCount')
    const showComplete = screen.getByTestId('showComplete')
    const sort = screen.getByTestId('sort')

    expect(displayCount).toHaveTextContent('3')
    expect(showComplete).toHaveTextContent('false')
    expect(sort).toHaveTextContent('difficulty')
  });
});