import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2Z"
      fill="currentColor"
      fillOpacity={0.54}
    />
  </Svg>
);
