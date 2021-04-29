import React from "react";
import { ActionButton, Container, LeftColumn, Title, Wrapper } from "./styled";

const HomeScreen = (): JSX.Element => (
  <Container>
    <LeftColumn>
      <Wrapper>
        <Title color="#AD12B0">Colors</Title>
        <Title color="#fff">and</Title>
        <Title color="#7B7B74">Criative</Title>
      </Wrapper>
      <ActionButton>Gerar paleta</ActionButton>
    </LeftColumn>
  </Container>
);

export default HomeScreen;
