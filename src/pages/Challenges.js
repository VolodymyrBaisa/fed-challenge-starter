import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { containerAnimation } from "../components/Animation";
//Components
import Card from "../components/Card";

const Challenges = (datas) => {
    return (
        <StyledChallenges
            variants={containerAnimation}
            initial={["hidden", "rest"]}
            animate="visible"
        >
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
    min-height: 100vh;
    .container {
        margin: 4.8vw 9vw;
        display: grid;
        justify-content: center;
        align-items: start;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2.4rem;
        row-gap: 2.4rem;

        @media (max-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 800px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Challenges;
