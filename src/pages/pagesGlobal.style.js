import styled, { css } from "styled-components";

//pages same style
export const PageContainer = styled.div`
  width: 80vw;
  margin: auto;
`;
export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

//single card style(forecast & favorite)

const favStyle = css`
  height: 300px;
  cursor: pointer;
`;
const defaultStyle = css`
  height: 250px;
`;
const getCardStyle = (props) => {
  return props.favorite ? favStyle : defaultStyle;
};

export const SingleCardContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.backgroundColor};
  padding: 0 10px;
  box-shadow: 0 6px 6px -6px ${({ theme }) => theme.shadow};
  flex: 1;
  margin: 5px;
  ${getCardStyle}
`;

export const ImgTemperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const PhraseTitle = styled.h3`
  min-height: 46px;
`;
