import React, { useCallback, useEffect, useState } from "react";
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

const HomeScreen = (): JSX.Element => {
  const [colors, setColors] = useState([
    "#EDA751",
    "#F1642E",
    "#DF5243",
    "#C9384A",
    "#6C121D",
  ]);

  const generetedColors = useCallback(() => {
    let newColors = [];
    for (let index = 0; index < 5; index++) {
      let color = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      newColors.push(color);
    }

    setColors(newColors);
  }, []);

  useEffect(() => {
    generetedColors();
  }, []);


  return (
    <Container>
      <LeftColumn>
        <Wrapper>
          <Title color="#AD12B0" animation>
            Colors
          </Title>
          <Title color="#fff">and</Title>
          <Title color="#7B7B74">Criative</Title>
        </Wrapper>
        <ActionButton onClick={generetedColors}>Gerar paleta</ActionButton>
      </LeftColumn>
      <RightColumn>
        <ColorsContainer>
          {colors?.map((color, index) => (
            <Colors key={index} color={color}>
              {color}
            </Colors>
          ))}
        </ColorsContainer>
      </RightColumn>
    </Container>
  );
};

export default HomeScreen;
