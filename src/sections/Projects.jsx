import React from 'react'
import Title from '../components/Title'
import TiltedCard from '../components/ProjectCards'

const Projects = () => {
    return (
        <div className='w-full h-auto py-10 overflow-auto'>
            <Title
                small={'Projects'}
                main={'A Glimpse into What I’ve Built'}
                sub={'Showcasing real-world solutions crafted with passion, precision, and purpose.'}
            />
            <div className='flex justify-center'>
                <div className='flex flex-row flex-wrap gap-5 w-[90%] justify-center py-10'>
                    <TiltedCard
                        text={'Medicinal Plant identification'}
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 
                        />

                    <TiltedCard
                        text={'Portfolio V2'} 
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 

                        />

                    <TiltedCard
                        text={'Facial Landmark Detection & Paralysis Identification'} 
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 

                        />

                    <TiltedCard
                        text={'Blog Site Using ReachJS PostgreSQL ExpressJS'} 
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 

                        />

                    <TiltedCard
                        text={'Soft Computing Algorithms'} 
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 

                        />

                    <TiltedCard
                        text={'Autostruct AI'} 
                        bubbleText={['Software developer', 'Full Stack Engineer', 'Web3 Enthusiast', 'Web Designer', 'AI/ML Architect', 'Security Analyst']} 
                        />
                </div>
            </div>
        </div>
    )
}

export default Projects