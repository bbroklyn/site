import ParticlesComponent from "@/components/background.jsx";
import './about.css';
import { Link } from "react-router-dom";
import '@/index.css';

const About = () => {
    return (
            <div className="content">
                <ParticlesComponent id="background" />
                <div className="about">
                    <div className="about-text">
                        Hello! My name is <span className="highlight">Vlad</span>, I am 18 years old aspiring programmer from <span className="highlight">Tyumen</span>.
                        I like to do open source projects. Looking for partners with whom we can write cool projects and bring them to life.
                    </div>
                    <div className="button-container">
                        <Link to="/">
                            <button className="goback">
                                GO BACK!
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    );
}

export default About;
