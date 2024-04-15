import ParticlesComponent from "@/components/background.jsx";
import KotlinTechStackCard from "@/components/KotlinCard.jsx";
import CSharp from "@/components/CSharp.jsx";
import CPlusPlus from "@/components/Cpp.jsx";
import GitCard from "@/components/gitCard.jsx";
import './cards.css'

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
            </div>
        </div>
    );
}

export default CardsPage;
