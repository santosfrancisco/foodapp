import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const ClosedEyeIcon = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Path
      d="M19.167 14.215c1.253-1.439 1.916-2.715 1.916-2.715S17.6 4.792 11.5 4.792a8.237 8.237 0 0 0-1.917.225M11.5 8.625a2.87 2.87 0 0 1 2.875 2.875m-11.5-8.625 17.25 17.25m-8.625-5.75a2.87 2.87 0 0 1-2.835-2.396m-4.69-3.354c-.296.33-.561.654-.795.958-.83 1.082-1.263 1.917-1.263 1.917s3.485 6.708 9.583 6.708c.327 0 .647-.019.958-.055"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
