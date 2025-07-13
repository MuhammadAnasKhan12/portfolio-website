import React from 'react'

import { PinContainer } from "./ui/Pin";
import { projects } from "@/data";
import { FaLocationArrow } from 'react-icons/fa6';

const ProjectSection = () => {
    return (
        <section id='projects' className='py-20'>
            <h1 className="text-white font-bold text-4xl md:text-[4rem] text-center">
                Projects{" "}
            </h1>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 ">
                {projects.map((item) => (
                    <div key={item.id} className='w-full mt-8 h-[25rem] lg:min-h-[30rem] flex items-center justify-center'>
                        <PinContainer 
                        >
                            <div className=' w-full h-full mb-6 overflow-hidden rounded-2xl'>
                                <div className='relative overflow-hidden w-full h-full'><img src="/bg.png" alt='bgimg' /></div>
                                <img src={item.img} className='absolute  inset-0 object-cover z-10' />
                            </div>
                            <h1 className="font-bold  text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                                {item.title}
                            </h1>
                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm  line-clamp-4"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>


                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center text-purple hover:text-white"
                                >
                                    <p className="flex lg:text-xl md:text-xs text-sm">
                                        visit
                                    </p>
                                    <FaLocationArrow className="ms-1" />
                                </a>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection;