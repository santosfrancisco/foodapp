import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity<{outlined?: boolean}>`
  height: 46px;
  width: auto;
  width: 100%;
  align-items: center;
  justify-content: center;

  box-shadow: -10px 19px 20px rgba(43, 9, 120, 0.35);
  border-radius: 16px;

  ${({outlined}) => {
    return outlined
      ? css`
          border: 1px solid #1a1a1a;
        `
      : css`
          background-color: #130402;
        `;
  }}

  ${({disabled}) =>
    disabled &&
    css`
      opacity: 0.75;
    `}
`;

export const Title = styled.Text<{outlined?: boolean}>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;

  ${({outlined}) =>
    outlined &&
    css`
      color: #1a1a1a;
    `}

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
