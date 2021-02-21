import React from "react";
import { useLocation } from "react-router-dom";
import {
  MyLink,
  NavContainer,
  NavContent,
  NavLinksContainer,
} from "./navBar.style";
import { CheckBoxInput } from "../check-box/checkBox.style";
import Logo from "../logo/Logo";
import { themeStyle } from "../../utils/enum";

const NavBar = ({ themeToggler, theme }) => {
  const location = useLocation();
  const navMenu = [
    { title: "Home", to: "/" },
    { title: "Favorite", to: "/favorite" },
  ];
  let isActive = (link) => {
    return link === location.pathname ? 1 : 0;
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo />
        <NavLinksContainer>
          <CheckBoxInput
            checked={theme === themeStyle.LIGHT}
            onChange={themeToggler}
          />
          {navMenu.map((link, i) => (
            <MyLink active={isActive(link.to)} key={i} to={link.to}>
              {link.title}
            </MyLink>
          ))}
        </NavLinksContainer>
      </NavContent>
    </NavContainer>
  );
};

export default NavBar;
