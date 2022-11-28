import styled from 'styled-components';

export const Input = ({ placeholder = '' }) => {
  return (
    <>
      <SInput type='text' placeholder={placeholder} />
    </>
  );
};

const SInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 9999px;
  padding: 8px 16px;
  outline: none;
`;
