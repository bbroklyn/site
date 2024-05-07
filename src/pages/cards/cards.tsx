import * as React from 'react'
import {Link} from "react-router-dom";
//
import ParticlesComponent from "@/components/background.tsx";
import KotlinTechStackCard from '@/components/KotlinCard.tsx';
import CSharp from "@/components/CSharp.tsx";
import CPlusPlus from "@/components/Cpp.tsx";
import GitCard from "@/components/gitCard.tsx";
import './cards.css'
import '@/index.css'
import PostgresCard from "@/components/PostgresCard.tsx";

const CardsPage: React.FC = () => {
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

export default CardsPage