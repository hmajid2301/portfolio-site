import { render } from '@testing-library/react';
import React, { ReactElement, ComponentProps, FunctionComponent } from 'react';

const AllTheProviders: React.FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (
  ui: ReactElement<ComponentProps<FunctionComponent>>,
  options?: object
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
