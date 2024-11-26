import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const DetailsIcon: React.FC<{
  width?: number;
  height?: number;
  fill?: string;
}> = ({width = 24, height = 24, fill = 'none'}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round">
    <Rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
    <Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <Path d="M12 11h4" />
    <Path d="M12 16h4" />
    <Path d="M8 11h.01" />
    <Path d="M8 16h.01" />
  </Svg>
);

export default DetailsIcon;
