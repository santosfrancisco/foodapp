import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const UserIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.415 3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm-6.5 4.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.415 14c-4.365 0-7.908 2.742-8.787 6.262a.482.482 0 0 0 .128.47c.14.15.376.268.66.268h16c.282 0 .52-.118.659-.268a.482.482 0 0 0 .127-.47C20.324 16.742 16.78 14 12.415 14ZM1.688 19.777C2.815 15.261 7.247 12 12.415 12c5.169 0 9.6 3.26 10.728 7.777.467 1.874-1.16 3.223-2.728 3.223h-16c-1.567 0-3.195-1.35-2.727-3.223Z"
      fill="currentColor"
    />
  </Svg>
);
