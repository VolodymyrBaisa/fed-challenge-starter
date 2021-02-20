import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = ({ photo, user_icon, title, time, distance, playlist_items }) => {
    return (
        <StyledCard>
            <img src={Object.values(photo)} />
            <img src={Object.values(user_icon)} />
            <div>{title}</div>
            <div>{time}</div>
            <div>{distance}</div>
            <div>{playlist_items}</div>
        </StyledCard>
    );
};

const StyledCard = () => styled(motion.div)``;

export default Card;
