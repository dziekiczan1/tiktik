import React from "react";
import { Video } from "../types";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return <div>{text}</div>;
};

export default NoResults;
