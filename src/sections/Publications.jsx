import React from 'react'
import Title from '../components/Title'
import LongCard from '../components/LongCard'
import { image } from 'framer-motion/client'

const Publications = () => {
    const papers = [
        {
            title: "Ambulance detection using LoRa",
            description:
                "Developed a LoRa-based system to detect ambulances for efficient traffic management. Awarded Best Paper at the National Conference on Innovative Research and Advanced Computing.",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Revolutionizing Dental Care: Predictive Treatment and Prosthetic Rehabilitation for Malalignment through Virtual Patients and Deep Neural Networks",
            description:
                "Utilized deep learning and virtual patient modeling to improve dental treatment planning. Presented at the International Conference On Computer Communication And Informatics 2024 (SCOPUS Indexed).",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Prediction of Sickle Cell Anemia",
            description:
                "Implemented a machine learning model for early detection of sickle cell anemia. Presented at the International Conference On Computer Communication And Informatics 2024 (SCOPUS Indexed).",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "NLP-based Product Recommendation: Utilizing Named Entity Recognition Approach",
            description:
                "Developed a product recommendation system using NLP and Named Entity Recognition. Presented at the International Conference Trends in Quantum Computing & Emerging Business Technologies (SCOPUS Indexed).",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Monitoring Industrial Protection Gear Using Intelligent System",
            description:
                "Built an intelligent system to monitor industrial safety gear usage. Presented at the 2nd International Conference on Networking and Communications 2024 (Published in IEEE Xplore).",
            image: "https://via.placeholder.com/150"
        },
        {
            title: "Integrated Pollution Detection and Systematic Reporting for Sustainable Disposal",
            description:
                "Designed a system for pollution detection and automated environmental reporting. Presented at the 2nd International Conference on Networking and Communications 2024 (Published in IEEE Xplore).",
            image: "https://via.placeholder.com/150"
        }
    ];



    return (
        <div className='w-full h-auto py-10'>
            <Title
                small={'Publications'}
                main={'Published Works & Contributions'}
                sub={'A collection of research papers, articles, and written contributions across various domains.'}
            />
            <div className='flex flex-col justify-center items-center gap-5 py-10'>
                {papers.map((item, index) => {
                    const { image, title, description } = item
                    return (
                        < LongCard
                            key={index}
                            image={image}
                            title={title}
                            description={description}
                        />
                    );

                })}


            </div>
        </div>
    )
}

export default Publications