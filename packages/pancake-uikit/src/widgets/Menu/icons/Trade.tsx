import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import tradePng from "./trade.svg"

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
        <image width="24" height="24" href={tradePng}/>
    </Svg>
  );
};

export default Icon;
