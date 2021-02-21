import styled from "styled-components";

export const CheckBoxInput = styled.input.attrs({
  type: "checkbox",
})`
  position: relative;
  width: 40px;
  height: 20px;
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.checkBoxBg};
  border-radius: 12px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.body};
    border-radius: 50%;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  &:checked::before {
    left: 20px;
  }
`;
