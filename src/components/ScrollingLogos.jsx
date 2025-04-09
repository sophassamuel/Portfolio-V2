import React from 'react';

const CompanyLogoData = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', alt: 'MongoDB' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', alt: 'Express' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', alt: 'Django' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', alt: 'CSS3' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', alt: 'AWS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', alt: 'Google Cloud' },
];

const InfiniteScrollingLogosAnimation = () => {
    return (
        <div className="w-[50%] mx-auto overflow-hidden py-8 relative">
            <h2 className="text-center text-xl text-white/70 mb-6">
                Technologies Known
            </h2>

            <div className="relative w-full overflow-hidden">
                <div className="animate-slide flex w-max gap-16">
                    {/* Repeat logos twice for infinite effect */}
                    {CompanyLogoData.concat(CompanyLogoData).map(({ src, alt }, i) => (
                        <img
                            key={`${alt}-${i}`}
                            src={src}
                            alt={alt}
                            className="h-10 w-auto flex-shrink-0"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScrollingLogosAnimation;
