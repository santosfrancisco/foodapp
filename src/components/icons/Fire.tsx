import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';

export const FireIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G>
      <Path
        d="M10 19.167a6.25 6.25 0 0 0 6.25-6.25c0-.722-.192-1.415-.417-2.059-1.389 1.373-2.444 2.059-3.166 2.059 3.329-5.834 1.5-8.334-3.5-11.667.416 4.167-2.33 6.062-3.449 7.114A6.25 6.25 0 0 0 10 19.167Zm.592-14.805c2.7 2.292 2.714 4.073.627 7.729a1.667 1.667 0 0 0 1.448 2.492c.573 0 1.153-.166 1.765-.495a4.585 4.585 0 0 1-6.776 2.764 4.584 4.584 0 0 1-.796-7.274c.105-.099.637-.571.66-.592.354-.317.645-.598.932-.905 1.025-1.098 1.762-2.317 2.139-3.718Z"
        fill="currentColor"
        fillOpacity={0.8}
      />
    </G>
  </Svg>
);