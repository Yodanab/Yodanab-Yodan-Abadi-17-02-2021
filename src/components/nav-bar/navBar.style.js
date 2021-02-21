import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor } from "../../utils/style/theme/theme";

export const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  height: 100px;
`;
export const NavContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const MyLink = styled(Link)`
  color: ${(props) =>
    props.active ? `${primaryColor}` : props.theme.textColor};
  text-decoration: none;
  margin: 0 15px;
  font-size: 1.2rem;
  user-select: none;
`;
