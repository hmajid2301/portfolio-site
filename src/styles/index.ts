import styled, { CreateStyled } from '@emotion/styled';

export type Theme = {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  fonts: {
    header: string;
    body: string;
  };
};

const theme: Theme = {
  color: {
    primary: 'blue-500',
    secondary: 'orange-500',
    tertiary: 'gray-500',
  },
  fonts: {
    header: 'Inter',
    body: 'Muli',
  },
};

export { theme };
export default styled as CreateStyled<Theme>;
