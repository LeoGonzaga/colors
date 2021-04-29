import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const LeftColumn = styled.div`
  width: 40vw;
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

type Color = {
  color: string;
};
export const Title = styled.h1<Color>`
  color: ${(props) => props.color};
  padding: 0px;
  margin: 0px;
  font-size: 100px;
`;
export const ActionButton = styled.button`
  width: 300px;
  height: 55px;
  border-radius: 4px;
  background-color: #fff;
  border: none;
  transition: 0.2s ease;
  font-weight: bold;
  &:hover {
    background-color: #5c0db6;
    color: #fff;
  }
`;
