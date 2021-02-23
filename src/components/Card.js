import React from "react";
import { Link } from "react-router-dom";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { cardAnimation } from "../components/Animation";
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
        <StyledCard variants={cardAnimation}>
            {playlist_items ? (
                <div className="workouts-wrapper">
                    <img
                        className="cardImage"
                        src={Object.values(photo)}
                        alt=""
                    />
                    <div className="playlist-wrapper">
                        <div className="items">{playlist_items}</div>
                        <div className="label">Workouts</div>
                        <Link to="/playlist">
                            <img
                                className="open-playlist"
                                src={playlistIcon}
                                alt="Playlist icon"
                            />
                        </Link>
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
                {timer && distanceIcon && (
                    <div className="destination-wrapper">
                        <div className="timer-wrapper">
                            <img src={timerIcon} alt="" />
                            <div>{timer}</div>
                        </div>
                        <div className="distance-wrapper">
                            <img src={distanceIcon} alt="" />
                            <div>{distance}</div>
                        </div>
                    </div>
                )}

                {details && (
                    <Link className="details" to="/description">
                        View Details
                    </Link>
                )}
            </div>
        </StyledCard>
    );
};

const StyledCard = styled(motion.div)`
    box-shadow: 0px 1px 2px rgba(46, 49, 52, 0.4);
    min-height: 28rem;
    border-radius: 0.5vw;
    overflow: hidden;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: 5px 5px 15px rgba(46, 49, 52, 0.4);
    }

    .cardImage {
        width: 100%;
        height: 16.4rem;
        object-fit: cover;
        background: #000c28;
    }
    .workouts-wrapper {
        position: relative;
        height: 16.4rem;
        .playlist-wrapper {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 12, 40, 0.543);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .items {
                color: #fff;
                font-weight: 800;
                font-size: 2.4rem;
                line-height: 3rem;
                margin-bottom: 0.7rem;
            }
            .label {
                color: #fff;
                font-weight: bold;
                font-size: 1rem;
                line-height: 1.2rem;
                letter-spacing: 0.03rem;
                text-transform: uppercase;
                margin: 0 2.7rem 0.9rem 2.7rem;
            }

            .open-playlist {
                width: 2.4rem;
                height: 2.4rem;
                transition: transform 0.2s ease;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }

    .info-wrapper {
        margin: 1.6rem;
        .title-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            div {
                font-weight: bold;
                font-size: 1.6rem;
                margin-right: 0.8rem;
                color: #2e3134;
                letter-spacing: 0.03rem;
            }

            img {
                width: 2.8rem;
                height: 2.8rem;
                object-fit: cover;
                background: #bd10e0;
                border-radius: 0.3vw;
            }
        }
        .destination-wrapper {
            display: flex;
            margin: 0.8rem 0;
            .timer-wrapper,
            .distance-wrapper {
                display: flex;
                margin-right: 0.6rem;
                img {
                    margin-right: 0.4rem;
                    height: 1.2rem;
                }

                div {
                    color: #2e3134;
                    font-size: 1rem;
                    line-height: 1.2rem;
                    letter-spacing: 0.03rem;
                    font-weight: 700;
                    text-transform: uppercase;
                }
            }
        }
        .details {
            position: relative;
            text-decoration: none;
            text-transform: uppercase;
            color: #0069d2;
            letter-spacing: 0.04rem;
            font-weight: bold;
            font-size: 1.4rem;
            line-height: 1.6rem;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: #2e3134;
            }
        }
    }
`;

export default Card;
