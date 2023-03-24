import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const EyeIcon = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Path
      d="M11.5 4.792c-6.098 0-9.583 6.708-9.583 6.708s3.485 6.708 9.583 6.708c6.099 0 9.583-6.708 9.583-6.708S17.6 4.792 11.5 4.792Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.5 14.375a2.875 2.875 0 1 0 0-5.75 2.875 2.875 0 0 0 0 5.75Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
