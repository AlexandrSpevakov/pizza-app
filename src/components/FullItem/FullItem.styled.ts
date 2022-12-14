import styled from "styled-components";
import { Container } from "../../styles/Base.styled";

const Item = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 550px) {
    padding-bottom: 40px;
  }
`;

const Image = styled.img`
  margin-top: 60px;
  margin-bottom: 40px;
  border-radius: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
    margin-top: 50px;
  }

  @media screen and (max-width: 400px) {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 600px) {
    font-size: 35px;
  }

  @media screen and (max-width: 400px) {
    line-height: 35px;
  }
`;

const Paragraph = styled.p`
  max-width: 800px;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const Price = styled.h4`
  font-size: 45px;

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

export { Item, Image, Title, Paragraph, Price };
