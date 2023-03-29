import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const CartIcon = (props: SvgProps) => (
  <Svg width={23} height={21} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.29 3.222c.23-.298.583-.472.959-.472h16.917a1.208 1.208 0 0 1 1.167 1.52l-2.417 9.062c-.14.53-.62.897-1.167.897H6.666a1.208 1.208 0 0 1-1.168-.897L3.081 4.27c-.096-.363-.019-.75.21-1.048Zm2.532 1.945 1.772 6.646H17.82l1.773-6.646H5.822Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.624.333h3.02c.555 0 1.039.378 1.173.916l.604 2.416-2.344.586L2.7 2.75H.624V.333ZM7.27 17.25a.604.604 0 1 0 0 1.208.604.604 0 0 0 0-1.208Zm-3.021.604a3.02 3.02 0 1 1 6.042 0 3.02 3.02 0 0 1-6.042 0ZM18.145 17.25a.604.604 0 1 0 0 1.208.604.604 0 0 0 0-1.208Zm-3.021.604a3.02 3.02 0 1 1 6.042 0 3.02 3.02 0 0 1-6.042 0Z"
      fill="currentColor"
    />
  </Svg>
);
