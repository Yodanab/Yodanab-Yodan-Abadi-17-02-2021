import React from "react";
import { ButtonContainer, CustomButton } from "./myButton.style";

const MyButton = ({ children, onClick, ...props }) => {
  return (
    <ButtonContainer>
      <CustomButton onClick={onClick} {...props}>
        {children}
      </CustomButton>
    </ButtonContainer>
  );
};

export default MyButton;
