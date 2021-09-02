import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";
import logoPng from "../../../widgets/Menu/icons/logo.png";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
        <image width="32" height="32" href={logoPng}/>
    </Svg>
  );
};

export default Icon;
