import styled, { css } from "styled-components";

import { Container } from "../../styles/Base.styled";

interface WrapperProps {
  isCart: boolean;
}

interface LiProps {
  mode: string;
}

const Main = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 40px 0;

  @media screen and (max-width: 550px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled(Container)<WrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    gap: 15px;
  }

  ${({ isCart }) =>
    !isCart &&
    css`
      @media screen and (max-width: 670px) {
        flex-direction: column;
        align-items: start;
        row-gap: 20px;
      }
    `}
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;

  @media screen and (max-width: 670px) {
    flex-direction: row-reverse;
  }
`;

const Icon = styled.i<LiProps>`
  font-size: 23px;
  color: ${({ theme }) => theme.colors.third};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  ${({ mode }) =>
    mode === "cart" &&
    css`
      @media screen and (max-width: 450px) {
        position: absolute;
        font-size: 23px;
        top: -18px;
      }
    `}
`;

const Delimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`;

export { Main, Wrapper, Right, Icon, Delimiter };
