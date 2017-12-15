// @flow
import * as React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

type Props = {
  onSubmit?: () => void,
};

const Form = (props: Props) => (
  <StyledForm
    {...props}
    onSubmit={event => {
      event.preventDefault();

      if (props.onSubmit) {
        props.onSubmit();
      }
    }}
  />
);

export default Form;
