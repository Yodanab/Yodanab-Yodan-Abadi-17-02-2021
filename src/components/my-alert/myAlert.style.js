import styled, { css } from "styled-components";

const successStyle = css`
  background-color: #aeffae;
  border-left: 5px solid #5de75d;
  color: #676767;
`;
const failStyle = css`
  background-color: #ff7d7d;
  border-left: 5px solid #d73e3e;
  color: white;
`;

const getAlertStyle = (props) => {
  return props.color === "success" ? successStyle : failStyle;
};

export const AlertBox = styled.div`
  padding: 20px;
  left: 0;
  right: 0;
  position: fixed;
  width: 40%;
  top: 20px;
  z-index: 99;
  margin: auto;
  text-align: center;
  box-shadow: 0 6px 6px -6px ${({ theme }) => theme.shadow};
  border-radius: 20px;
  ${getAlertStyle}
`;
