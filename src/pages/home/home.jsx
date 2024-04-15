import ParticlesComponent from "@/components/background.jsx";
import ProfilePicture from "@/components/ProfilePicture.jsx";
import {FaDiscord, FaGithub, FaTelegram} from "react-icons/fa";
import './home.css'
import {startConsolePicture} from "@/components/constants.js";

function Home() {
    return (
        <div className="app-container">
            <ParticlesComponent id="background"/>
            <ProfilePicture className="profile-picture"/>
            <h1 className="heading">Vladislav \ broklyn \ Konovalow</h1>
            <div>
                <p className="bio-text">
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
        </div>
    );
}

export default Home;
