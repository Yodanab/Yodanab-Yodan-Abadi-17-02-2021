import styled, { css } from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px;
`;

export const CustomButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  color: ${(props) => (props.isFavorite ? `${props.theme.body}` : "grey")};
  background-color: ${(props) => (props.isFavorite ? "#c4455b" : "#c6c6c6")};
  transition: 0.5s;
  height: 50px;
  width: 50px;
  font-size: 2rem;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    outline: none;
  }
`;
