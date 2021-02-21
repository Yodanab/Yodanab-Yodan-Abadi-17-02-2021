import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;
export const Label = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: none;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;
