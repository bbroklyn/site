import './index.css';
import ProfilePicture from './components/ProfilePicture';
import KotlinTechStackCard from './components/KotlinCard';
import CSharp from './components/CSharp';
import CPlusPlus from './components/Cpp';
import GitCard from './components/gitCard';
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function App() {
  return (
    <div className="app-container">
      <ProfilePicture className="profile-picture" />
      <h1 className="heading">Vladislav \ broklyn \ Konovalow</h1>
      <div className="bio-container">
        <p className="bio-text">
          18 year old aspiring programmer from Tyumen.
        </p>
      </div>
      <p className="description">
        <a href="https://github.com/bbroklyn" target="_blank" className="github-link">
          <FaGithub />
        </a>
        <a href="https://discord.com/users/1215604636938145813" target="_blank" className="github-link">
          <FaDiscord />
        </a>
      </p>
      <h2 className="heading">My knowledge</h2>
      <div className="cards-container">
        <KotlinTechStackCard />
        <CSharp />
        <CPlusPlus />
        <GitCard />
      </div>
    </div>
  );
}

export default App;
