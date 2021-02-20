import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Icons
import timerIcon from "../img/svg/icn_timer_line.svg";
import distanceIcon from "../img/svg/icn_distance_line.svg";
import playlistIcon from "../img/svg/icn_playlist.svg";

const Card = ({
    photo,
    user_icon,
    title,
    timer,
    distance,
    playlist_items,
    details,
}) => {
    return (
        <StyledCard>
            <img src={Object.values(photo)} alt="" />
            <div className="info-wrapper">
                <div className="title-wrapper">
                    <img src={Object.values(user_icon)} alt="User icon" />
                    <div>{title}</div>
                </div>
                <div className="timer-wrapper">
                    <img src={timerIcon} alt="" />
                    <div>{timer}</div>
                </div>
                <div>
                    <img src={distanceIcon} alt="" />
                    <div>{distance}</div>
                </div>
                <div>{playlist_items}</div>
                {details && <Link to="/description">View Details</Link>}
            </div>
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)``;

export default Card;
