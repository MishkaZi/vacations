import React from "react";
import VacationCard from "../VacationCard/VacationCard";
import "./VacationCardList.css";

const VacationCardList = (): JSX.Element => {
  return (
    <div className="vacation-card-list">
        <h1>VACATION CARD List!</h1>
        <VacationCard/>
    </div>
  );
};

export default VacationCardList;