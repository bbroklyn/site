import * as React from 'react';
import ParticlesComponent from "@/components/background.tsx";
import { Link } from "react-router-dom";
import { FaDiscord, FaGithub, FaTelegram } from "react-icons/fa";
import './home.css';
import { startConsolePicture } from "@/components/constants.ts";
import ProfilePicture from '@/components/ProfilePicture';

const Home: React.FC = () => {
    console.log(startConsolePicture);
    return (
        <div className="app-container">
            <ParticlesComponent id="background" />
            <ProfilePicture className="profile-picture" />
            
            <h1 className="headingHome">Vladislav \broklyn\ Konovalow</h1>
            <div>
                <p className="about-text">
                    18 year old aspiring programmer from Tyumen.
                </p>
            </div>
            <p>
                <a href="https://github.com/bbroklyn" target="_blank" className="social-link">
                    <FaGithub/>
                </a>
                <a href="https://discord.com/users/1215604636938145813" target="_blank" className="social-link">
                    <FaDiscord/>
                </a>
                <a href="https://t.me/vladkonovalow" target="_blank" className="social-link">
                    <FaTelegram/>
                </a>
            </p>
            <Link to="/cards" >
                <button className="homeButtons">
                    KNOWLEDGE
                </button>
            </Link>
            <Link to="/contacts" >
                <button className="homeButtons">
                    Contacts
                </button>
            </Link>
            <Link to="/about" >
                <button className="homeButtons">
                    About author
                </button>
            </Link>
        </div>
    );
}

export default Home;
