import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Components
import Card from "../components/Card";

const Challenges = (datas) => {
    return (
        <StyledChallenges>
            <div className="container">
                {datas &&
                    datas.datas.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
            </div>
        </StyledChallenges>
    );
};

const StyledChallenges = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .container {
        margin: 0 9vw;
        display: grid;
        justify-content: center;
        align-items: start;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2.4rem;
        row-gap: 2.4rem;
    }
`;

export default Challenges;
