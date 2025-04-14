import React from 'react'
import Title from '../components/Title'
import TiltedCard from '../components/ProjectCards'

const Projects = () => {
    return (
        <div className='w-full h-auto py-10 '>
            <Title
                small={'Projects'}
                main={'A Glimpse into What I’ve Built'}
                sub={'Showcasing real-world solutions crafted with passion, precision, and purpose.'}
            />
            <div className='flex justify-center'>
                <div className='flex flex-row flex-wrap gap-5 w-[90%] justify-center py-10'>
                    <TiltedCard
                        text={'Autostruct AI'}
                        bubbleText={['ReactJS','ExpressJS','MongoDB','NodeJS','Tailwind CSS','Google OAuth','OpenAI API','NLP','Scaffolding']}
                        link={'https://github.com/AutoStructAI'}
                    />
                    <TiltedCard
                        text={'Medicinal Plant identification'}
                        bubbleText={['Python', 'Jupyter Notebook', 'NumPy', 'Pandas', 'AI/ML', 'Random Forest Classifier', 'Flask', 'HTML', 'CSS']}
                        link={'https://github.com/sophassamuel/Medicinal-Plant-Identification-using-CNN-and-deployed-using-flask-'}
                    />

                    <TiltedCard
                        text={'Portfolio V2'}
                        bubbleText={['React', 'Tailwind', 'ShadeCn', 'Framer Motion', 'CSS']}
                        link={'https://github.com/sophassamuel/Portfolio-V2'}
                    />

                    <TiltedCard
                        text={'Facial Landmark Detection & Paralysis Identification'}
                        bubbleText={['Python', 'Jupyter Notebook', 'NumPy', 'OpenCV', 'TensorFlow', 'Keras', 'Flask', 'HTML', 'CSS']}
                        link={'https://github.com/sophassamuel/Facial-Landmark-Detection-and-Paralysis-Identification'}
                    />

                    <TiltedCard
                        text={'Blog Site with CRUD operations'}
                        bubbleText={['React', 'Express', 'Node', 'PostgreSQL', 'Sequelize', 'CSS']}
                        link={'https://github.com/sophassamuel/Blog-Site-ReachJS-PostgreSQL-ExpressJS'}
                    />

                    <TiltedCard
                        text={'Soft Computing Algorithms'}
                        bubbleText={['Python', 'Jupyter Notebook', 'NumPy', 'Pandas', 'Keras', 'TensorFlow']}
                        link={'https://github.com/sophassamuel/Soft-Computing-Algorithms'}
                    />


                </div>
            </div>
        </div>
    )
}

export default Projects