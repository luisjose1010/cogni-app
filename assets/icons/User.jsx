import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 120 120"
    {...props}
  >
    <Circle cx={60} cy={60} r={60} fill="#fff" />
    <Circle cx={60} cy={60} r={50} fill="#d9d9d9" />
    <Path
      d="M86.05 102.598V83.346c0-10.622-8.537-19.23-19.068-19.23H51.07c-10.53 0-19.07 8.608-19.07 19.23v17.992A50 50 0 0 0 60 110a50 50 0 0 0 26.05-7.402Z"
      style={{
        fill: "#010002",
      }}
    />
    <Path
      fill="#010002"
      d="M59.027 55.288c9.938 0 17.994-8.123 17.994-18.144C77.02 27.124 68.965 19 59.027 19s-17.995 8.123-17.995 18.144c0 10.021 8.057 18.144 17.995 18.144z"
    />
  </Svg>
)
export default SvgComponent
