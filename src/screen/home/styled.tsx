import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  min-width: 400px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 50vw;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    padding: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const rotate = keyframes`  
0%   {color: #f50057;}
10% {color: #4deeea;}
25%  {color: #AC00FF;}
35%  {color: #09EAE1;}
45%  {color: #F62BFD;}
55%  {color: #ffea00;}
60%  {color: #1769aa;}
75%  {color: #FD3004;}
100% {color: #74ee15;}
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
  min-width: 400px;
  width:100%;
`;
export const Colors = styled.div<Color>`
  height: 90px;
  margin: 0px;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  text-transform: uppercase;
  font-size: 30px;
  color: #110d0d;
  background-color: ${(props) => props.color};

  &:first-child {
    border-top-right-radius: 50px;
  }

  &:last-child {
    border-bottom-right-radius: 50px;
  }

  @media (max-width: 800px) {
    width: 100%;
    &:first-child {
      border-top-right-radius: 0px;
    }

    &:last-child {
      border-bottom-right-radius: 0px;
    }
  }
`;
