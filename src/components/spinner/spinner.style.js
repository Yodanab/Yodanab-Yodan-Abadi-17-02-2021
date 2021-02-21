import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/style/theme/theme";

export const OneDivSpinner = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top: 4px solid ${primaryColor};
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    border: 4px solid transparent;
  }
  &:before {
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-top-color: ${secondaryColor};
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3.5s linear infinite;
  }
  &:after {
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-top-color: ${primaryColor};
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.75s linear infinite;
  }
  -webkit-@keyframes spin {
    -webkit-from {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    -webkit-to {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
