//
import ParticlesComponent from "@/components/background.jsx";
import KotlinTechStackCard from "@/components/KotlinCard.jsx";
import CSharp from "@/components/CSharp.jsx";
import CPlusPlus from "@/components/Cpp.jsx";
import GitCard from "@/components/gitCard.jsx";
import './cards.css'
import '@/index.css'
import {Link} from "react-router-dom";
import PostgresCard from "@/components/PostgresCard.jsx";

const CardsPage = () => {
    return (
        <div>
            <h1 className="heading">My knowledge</h1>
            <div className="cards-container">
                <ParticlesComponent id="background"/>
                <KotlinTechStackCard/>
                <CSharp/>
                <CPlusPlus/>
                <GitCard/>
                <PostgresCard/>
            </div>
            <Link to="/" >
                <button className="goback">
                    GO BACK!
                </button>
            </Link>
        </div>
    );
}

export default CardsPage;
