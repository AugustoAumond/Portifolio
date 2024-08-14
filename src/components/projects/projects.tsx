import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { object } from "./object";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVercel } from "react-icons/si";
import { useEffect } from "react";
import './animProjects.css';

export default function Projects (){
    const projects = object;

    useEffect(()=>{

    }, [projects])

    return (
        <div id="projects" className="w-full bg-slate-950 border-b-2 border-letterColor border-b-letterColorflex flex-col items-center justify-center p-5 md:p-10 gap-10">
            <h1 id="title-projects" className="text-3xl md:text-5xl mt-10 mb-10 text-center">PROJETOS</h1>
            {projects.map((item, index)=>{
                return (
                <div className="w-full" key={index} >
                    <div key={index} className="w-full border-b-2 border-b-letterColor md:border-b-0 bg-slate-950 flex flex-col items-center justify-center gap-10 p-5 md:p-10">
                        <div  className="w-full max-w-7xl h-full flex flex-col justify-evenly items-center gap-5 md:gap-10 md:flex-row">
                            <div id="text-projects" className="flex flex-col flex-1  items-start justify-center gap-2 md:gap-5 w-[90%] md:w-[50%]">
                                <h1 className="text-letterColor text-1xl md:text-3xl">
                                    {item.name.toUpperCase()}
                                </h1>
            
                                <div>
                                    <p className="text-white text-sm md:text-base">
                                        SOBRE:
                                    </p>
            
                                    <p className="text-letterColor text-xs md:text-sm">
                                        {item.description}
                                    </p>
                                </div>
            
                                <div className="flex flex-col items-start justify-center gap-3">
                                    <p>TECNOLOGIAS UTILIZADAS:</p>
            
                                    <div className="flex gap-4 text-letterColor">
                                        {item.tecnology.html && <FaHtml5 className="size-4 md:size-6"/>}
                                        {item.tecnology.css && <FaCss3 className="size-4 md:size-6"/>}
                                        {item.tecnology.tailwind && <RiTailwindCssFill className="size-4 md:size-6" />}
                                        {item.tecnology.javascript && <FaJs className="size-4 md:size-6"/>}
                                        {item.tecnology.typescript && <SiTypescript className="size-4 md:size-6" />}
                                        {item.tecnology.react && <FaReact className="size-4 md:size-6"/>}
                                        {item.tecnology.angular && <FaAngular className="size-4 md:size-6" />}
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-start gap-3">
                                    <a href={item.url} target="_blank" className=" border-2 p-2 flex items-center text-xs md:text-base rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                        <SiVercel className="size-4 md:size-6" /> DEPLOY
                                    </a>

                                    <a href={item.github} target="_blank" className="items-center border-2 p-2 flex text-xs md:text-base rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                        <FaGithub className="size-4 md:size-6"/> GITHUB
                                    </a>
                                </div>
                            </div>
            
                            <div id="img-projects" className="flex flex-col items-center justify-center gap-5 w-[100%] md:w-[50%]">
                                <div className="overflow-hidden rounded-2xl">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                )
            })}

        </div>
    )
}