import React from 'react'
import styled from 'styled-components'
import * as polished from 'polished'
const blue = polished.lighten(0.1, '#6272a4');

const SubTitle = styled.h2`
  font-size: ${polished.modularScale(1)};
  font-weight: bold;
  color: ${blue};
  margin: 0;
  margin-left: ${polished.rem(30)};
  letter-spacing: ${polished.rem(0.3)};
  line-height: 1.5;

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: ${polished.rem(30)};
  }
`

const Title = styled.h1`
  font-weight: normal;
  font-size: ${polished.modularScale(4)};
  line-height: 1.1;
  margin: 0;
  margin-left: ${polished.rem(25)};

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: ${polished.rem(25)};
    margin-top: ${polished.rem(25)};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: left;
  margin: ${polished.rem(30)} 0;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`
const Container = styled.div`
  width: 100%;
  margin-bottom: ${polished.rem(60)};
`

const Header = () => (
  <Container>
    <TitleRow>
      <div>
        <Title>React Live</Title>
        <SubTitle>
          A production-focused playground for live editing React code  📡
        </SubTitle>
      </div>
    </TitleRow>
  </Container>
)

export default Header
