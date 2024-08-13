import { FaAngular, FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { object } from "./object";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVercel } from "react-icons/si";
import { useEffect } from "react";

export default function Projects (){
    const projects = object;

    useEffect(()=>{

    }, [projects])

    return (
        <div id="projects" className="w-full bg-primaryColor flex flex-col items-center justify-center gap-10">
            <h1 className="text-5xl mt-10">PROJETOS</h1>
            {projects.map((item, index)=>{
                return (
                <div className="w-full" key={index} >
                    {index % 2 === 0 ? 
                        <div key={index} className="w-full bg-primaryColor flex flex-col items-center justify-center gap-10 p-10">
                            <div  className="w-full max-w-7xl h-full flex justify-evenly items-center gap-5">
                                <div className="flex flex-col items-start justify-center gap-5 w-[50%]">
                                    <h1 className="text-letterColor text-3xl">
                                        {item.name.toUpperCase()}
                                    </h1>
                
                                    <div>
                                        <p className="text-white text-base">
                                            SOBRE:
                                        </p>
                
                                        <p className="text-letterColor text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                
                                    <div className="flex flex-col items-start justify-center gap-3">
                                        <p>PRINCIPAIS TECNOLOGIAS:</p>
                
                                        <div className="flex gap-4 text-letterColor">
                                            {item.tecnology.html && <FaHtml5 className="size-6"/>}
                                            {item.tecnology.css && <FaCss3 className="size-6"/>}
                                            {item.tecnology.tailwind && <RiTailwindCssFill className="size-6" />}
                                            {item.tecnology.javascript && <FaJs className="size-6"/>}
                                            {item.tecnology.typescript && <SiTypescript className="size-6" />}
                                            {item.tecnology.react && <FaReact className="size-6"/>}
                                            {item.tecnology.angular && <FaAngular className="size-6" />}
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center justify-start gap-3">
                                        <a href={item.url} target="_blank" className=" border-2 p-2 flex rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                            <SiVercel className="size-6" /> DEPLOY
                                        </a>

                                        <a href={item.github} target="_blank" className="border-2 p-2 flex rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                            <FaGithub className="size-6"/> GITHUB
                                        </a>
                                    </div>
                                </div>
                
                                <div className="flex flex-col items-center justify-center gap-5 w-[50%]">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src={item.img} alt="" />
                                    </div>
                                    
                                </div>  
                            </div>
                        </div> : 
                        <div key={index} className="w-full bg-terciaryColor flex flex-col items-center justify-center gap-10 p-10">
                            <div  className="w-full max-w-7xl h-full flex justify-evenly items-center gap-5">
                                <div className="flex flex-col items-start justify-center gap-5 w-[50%]">
                                    <h1 className="text-letterColor text-3xl">
                                        {item.name.toUpperCase()}
                                    </h1>
                
                                    <div>
                                        <p className="text-white text-base">
                                            SOBRE:
                                        </p>
                
                                        <p className="text-letterColor text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                
                                    <div className="flex flex-col items-start justify-center gap-3">
                                        <p>TECNOLOGIAS UTILIZADAS:</p>
                
                                        <div className="flex gap-4 text-letterColor">
                                            {item.tecnology.html && <FaHtml5 className="size-6"/>}
                                            {item.tecnology.css && <FaCss3 className="size-6"/>}
                                            {item.tecnology.tailwind && <RiTailwindCssFill className="size-6" />}
                                            {item.tecnology.javascript && <FaJs className="size-6"/>}
                                            {item.tecnology.typescript && <SiTypescript className="size-6" />}
                                            {item.tecnology.react && <FaReact className="size-6"/>}
                                            {item.tecnology.angular && <FaAngular className="size-6" />}
                                        </div>
                                    </div>

                                    <div className="w-full flex items-center justify-start gap-3">
                                        <a href={item.url} target="_blank" className=" border-2 p-2 flex rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                            <SiVercel className="size-6" /> DEPLOY
                                        </a>

                                        <a href={item.github} target="_blank" className="border-2 p-2 flex rounded-lg gap-2 hover:border-letterColor hover:text-letterColor">
                                            <FaGithub className="size-6"/> GITHUB
                                        </a>
                                    </div>
                                </div>
                
                                <div className="flex flex-col items-center justify-center gap-5 w-[50%]">
                                    <div className="overflow-hidden rounded-2xl">
                                        <img src={item.img} alt="" />
                                    </div>
                                </div>  
                            </div>
                        </div>
                        }

                </div>
                )
            })}

        </div>
    )
}