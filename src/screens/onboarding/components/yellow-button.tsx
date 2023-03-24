import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const YellowButton = (props: any) => (
  <Svg
    width={73}
    height={653}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M60.5-142h15v813h-15V514.263C60.5 470.138 0 454.5 0 415.5c0-39 60.5-54.5 60.5-93.362V-142Z"
      fill="#FCBA26"
    />
    <Circle
      cx={37.5}
      cy={415.5}
      r={20.5}
      stroke="#fff"
      strokeOpacity={0.9}
      strokeWidth={3}
    />
    <Path
      d="M35.5 410.5 40 415l-4.5 4.5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default YellowButton;
