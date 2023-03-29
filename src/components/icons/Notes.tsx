import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const NotesIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.955 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4Zm2 1v16h14V5h-14Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.955 2v4h-2V2h2ZM13.955 2v4h-2V2h2ZM17.955 2v4h-2V2h2ZM14.955 11h-7V9h7v2ZM18.455 15h-10.5v-2h10.5v2ZM15.955 19h-8v-2h8v2Z"
      fill="currentColor"
    />
  </Svg>
);
