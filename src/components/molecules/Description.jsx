import React from "react";
import "./Description.css";
import { descriptionData } from '../../data/Description';
import DescriptionImg from "../atoms/DescriptionImg";
import DescriptionTextt from "../atoms/DescriptionTextt";

function Description() {
  return (
    <div className="description-container">
    <DescriptionImg Link={descriptionData.image}></DescriptionImg>
      <div className="description-text">
        <DescriptionTextt text={descriptionData.text}></DescriptionTextt>
      </div>
    </div>
  );
}

export default Description;
