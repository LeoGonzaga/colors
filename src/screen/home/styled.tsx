import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftColumn = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const rotate = keyframes`  
0%   {color: red;}
25%  {color: yellow;}
50%  {color: blue;}
100% {color: green;}
`;
type Color = {
  color: string;
  animation?: boolean;
};
export const Title = styled.h1<Color>`
  color: ${(props) => props.color};
  padding: 0px;
  margin: 0px;
  font-size: 100px;

  ${(props) =>
    props.animation
      ? css`
          animation: ${rotate} 2s linear infinite;
        `
      : null}
`;

export const ActionButton = styled.button`
  width: 300px;
  height: 55px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  outline: none;
  transition: 0.2s ease;
  font-weight: bold;
  &:hover {
    background-color: #5c0db6;
    color: #fff;
  }
`;

export const RightColumn = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: flex-start;
`;

export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const Colors = styled.div<Color>`
  height: 90px;
  margin: 0px;
  width: 50vw;
  background-color: ${(props) => props.color};

  &:first-child {
    border-top-right-radius: 50px;
  }

  &:last-child {
    border-bottom-right-radius: 50px;
  }
`;
