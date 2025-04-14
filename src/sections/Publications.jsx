import React from 'react'
import Title from '../components/Title'
import LongCard from '../components/LongCard'
import { image, link, title } from 'framer-motion/client'
import lora from '@/assets/lora.jpg'
import dental from '@/assets/dental.jpg'
import sickle from '@/assets/sickle.jpg'
import prosuggesto from '@/assets/Prosuggesto.png'
import wastemanagement from '@/assets/wastemanagement.png'
import helmet from '@/assets/helmet.jpg'
import studentmonitoring from '@/assets/university.jpg'


const Publications = () => {
    const papers = [
        {
            title: "Ambulance detection using LoRa",
            description:
                "Developed a LoRa-based system to detect ambulances for efficient traffic management. Awarded Best Paper at the National Conference on Innovative Research and Advanced Computing.",
            image: lora,
            link: 'https://drive.google.com/file/d/1iRFvX-Y9NnhrvtGS8vln0BXfQ-5AfV4P/view?usp=sharing'
        },
        {
            title: "Revolutionizing Dental Care: Predictive Treatment and Prosthetic Rehabilitation for Malalignment through Virtual Patients and Deep Neural Networks",
            description:
                "Utilized deep learning and virtual patient modeling to improve dental treatment planning. Presented at the International Conference On Computer Communication And Informatics 2024 (SCOPUS Indexed).",
            image: dental,
            link: 'https://drive.google.com/file/d/1biFAcJq-ZJM6wwl6kHO5RdxLg__2_L6c/view?usp=sharing'
        },
        {
            title: "Prediction of Sickle Cell Anemia",
            description:
                "Implemented a machine learning model for early detection of sickle cell anemia. Presented at the International Conference On Computer Communication And Informatics 2024 (SCOPUS Indexed).",
            image: sickle,
            link: 'https://drive.google.com/file/d/1ucVacq9pvtBAcL9OR_DTeMjfAzhPd83_/view?usp=sharing'
        },
        {
            title: "NLP-based Product Recommendation: Utilizing Named Entity Recognition Approach",
            description:
                "Developed a product recommendation system using NLP and Named Entity Recognition. Presented at the International Conference Trends in Quantum Computing & Emerging Business Technologies (SCOPUS Indexed).",
            image: prosuggesto,
            link: 'https://drive.google.com/file/d/18XrJ8ppaXH3ZsmcM-FWjkId-Y_MfgoZt/view?usp=sharing'
        },
        {
            title: "Monitoring Industrial Protection Gear Using Intelligent System",
            description:
                "Built an intelligent system to monitor industrial safety gear usage. Presented at the 2nd International Conference on Networking and Communications 2024 (Published in IEEE Xplore).",
            image: helmet,
            link: 'https://www.researchgate.net/publication/380941329_Monitoring_Industrial_Protection_Gear_Using_Intelligent_System'
        },
        {
            title: "Integrated Pollution Detection and Systematic Reporting for Sustainable Disposal",
            description:
                "Designed a system for pollution detection and automated environmental reporting. Presented at the 2nd International Conference on Networking and Communications 2024 (Published in IEEE Xplore).",
            image: wastemanagement,
            link: 'https://www.researchgate.net/publication/380941306_Optimizing_Waste_Management_Integrated_Pollution_Detection_and_Systematic_Reporting_for_Sustainable_Disposal'
        },
        {
            title: "Monitorization of Student Behaviour Inside Campus",
            description:
                "Developed a surveillance and analytics system to monitor student activities and behavioral trends on campus, aiming to improve safety and administrative insights. Involved IoT devices, facial recognition, and real-time alerting.",
            image: studentmonitoring,
            link: "https://www.altechgroups.com/publication/admin/portal/books/book_pdf_17248217643021.pdf#page=91"
        }
    ];



    return (
        <div id='publications' className='w-full h-auto relative py-10'>
            <Title
                small={'Publications'}
                main={'Published Works & Contributions'}
                sub={'A collection of research papers, articles, and written contributions across various domains.'}
            />

            <div className='flex flex-col justify-center items-center gap-10 py-10'>
                {papers.map((item, index) => {
                    const { image, title, description, link } = item
                    return (
                        < LongCard
                            key={index}
                            image={image}
                            title={title}
                            description={description}
                            link={link}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Publications