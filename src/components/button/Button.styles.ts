import styled, {css} from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
  outlined?: boolean;
  small?: boolean;
  fullWidth?: boolean;
}>`
  height: 46px;

  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  align-items: center;
  justify-content: center;

  /* box-shadow: -10px 19px 20px rgba(43, 9, 120, 0.35); */
  border-radius: 10px;
  padding: 0 24px;
  margin: 0;

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

  ${({small}) =>
    small &&
    css`
      height: 20px;
    `}
`;

export const Title = styled.Text<{outlined?: boolean; small?: boolean}>`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #ffffff;

  ${({outlined}) =>
    outlined &&
    css`
      color: #1a1a1a;
    `}

  ${({small}) =>
    small &&
    css`
      font-size: 8px;
    `}

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
