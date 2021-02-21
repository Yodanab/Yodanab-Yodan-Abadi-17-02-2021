import styled from "styled-components";

export const SuggestionContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
  margin-bottom: 15px;
  position: absolute;
  width: 77%;
  z-index: 99;
  background-color: ${({ theme }) => theme.autoCompleteBack};
`;

export const Suggestion = styled.div`
  color: ${({ theme }) => theme.textColor};
  background-color: ${(props) =>
    props.active ? props.theme.autoCompleteActive : ""};
  padding: 5px;
  margin: 0 5px;
  font-size: 17px;
  cursor: pointer;
  user-select: none;
`;
