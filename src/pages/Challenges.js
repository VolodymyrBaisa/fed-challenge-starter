import React from "react";
//Components
import Card from "../components/Card";

const Challenges = (datas) => {
    return (
        <>
            {datas &&
                datas.datas.map((item, index) => (
                    <Card {...item} key={index} />
                ))}
        </>
    );
};

export default Challenges;
