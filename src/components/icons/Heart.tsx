import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const HeartIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m15.923 8.506-.111.133L9 15.573 2.188 8.639l-.111-.133a4.605 4.605 0 0 1-1.074-3.141 4.59 4.59 0 0 1 1.31-3.045 4.399 4.399 0 0 1 2.971-1.317A4.385 4.385 0 0 1 8.34 2.097l.66.58.66-.58a4.385 4.385 0 0 1 3.056-1.094 4.399 4.399 0 0 1 2.972 1.317l.712-.702-.712.702a4.59 4.59 0 0 1 1.309 3.045 4.604 4.604 0 0 1-1.074 3.141Z"
      stroke="currentColor"
      strokeOpacity={0.9}
      strokeWidth={2}
    />
  </Svg>
);
