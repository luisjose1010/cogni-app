import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
    />
    <Path
      stroke="#10B981"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
  </Svg>
)
export default SvgComponent
