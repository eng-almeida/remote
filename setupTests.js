import '@testing-library/jest-dom';
import 'jest-styled-components';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import theme from './styles/theme';

const buildMockStore = (mockedStore = {}) => {
  const mockStore = configureStore([]);
  const store = mockStore(mockedStore);
  return store;
};

global.renderWithProviders = (component, options = {}) => {
  const { store, ...renderOptions } = options;
  return render(component, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>
        <Provider store={buildMockStore(store)}>
          {children}
        </Provider>
      </ThemeProvider>
    )
  });
};