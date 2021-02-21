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
            {playlist_items ? (
                <div className="workouts-wrapper">
                    <img
                        className="cardImage"
                        src={Object.values(photo)}
                        alt=""
                    />
                    <div className="item-wrapper">
                        <div className="items">{playlist_items}</div>
                        <div className="label">Workouts</div>
                        <img className="open-playlist" src={playlistIcon} />
                    </div>
                </div>
            ) : (
                <img className="cardImage" src={Object.values(photo)} alt="" />
            )}
            <div className="info-wrapper">
                <div className="title-wrapper">
                    <div>{title}</div>
                    <img src={Object.values(user_icon)} alt="User icon" />
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

const StyledCard = styled(motion.div)`
    box-shadow: 0px 1px 2px rgba(46, 49, 52, 0.4);
    min-height: 22vw;
    border-radius: 0.5vw;
    overflow: hidden;
    .cardImage {
        width: 100%;
        height: 11vw;
        object-fit: cover;
    }

    .info-wrapper {
        margin: 1vw;
    }
`;

export default Card;
