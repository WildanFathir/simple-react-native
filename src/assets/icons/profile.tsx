import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

const ProfileIcon: React.FC<{
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
    <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <Circle cx={12} cy={7} r={4} />
  </Svg>
);

export default ProfileIcon;
