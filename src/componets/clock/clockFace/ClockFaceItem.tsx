import React from "react";
import { ClockFaceTime } from "./type";

const ClockFaceItem:React.FC<ClockFaceTime> = ({ time, style }) => {
    return  <div className={style}>{ time < 10 ? `0${time}`: time}</div>
}

export default ClockFaceItem;