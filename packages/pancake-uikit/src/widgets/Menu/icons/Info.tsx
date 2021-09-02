import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import infoPng from "./info.png";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
        <image width="32" height="32" href={infoPng}/>
    </Svg>
  );
};

export default Icon;
