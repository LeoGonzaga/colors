import React from "react";
import {
  ActionButton,
  Colors,
  ColorsContainer,
  Container,
  LeftColumn,
  RightColumn,
  Title,
  Wrapper,
} from "./styled";

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
    <RightColumn>
      <ColorsContainer>
        <Colors color="#EDA751" />
        <Colors color="#F1642E" />
        <Colors color="#DF5243" />
        <Colors color="#C9384A" />
        <Colors color="#6C121D" />
      </ColorsContainer>
    </RightColumn>
  </Container>
);

export default HomeScreen;
