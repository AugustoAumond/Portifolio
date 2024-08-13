import { FaAngular, FaCss3, FaGit, FaHtml5, FaJs, FaNode, FaReact, FaVuejs } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

export default function About(){
    return (
        <div id="about" className="w-full h-[700px] flex items-center justify-center p-10 border-b-2 border-b-letterColor">
            <div className="w-full max-w-7xl h-full flex justify-evenly items-center gap-5">
                <div className="flex flex-col items-start justify-center gap-5 w-[75%]">
                    <h1 className="text-letterColor text-3xl">
                        DESENVOLVEDOR FRONT END
                    </h1>

                    <div>
                        <p className="text-white text-base">
                            SOBRE MIM:
                        </p>

                        <p className="text-letterColor text-sm">
                        Sou apaixonado por tecnologia e tenho me dedicado a esse universo desde o final de 2020. Minha primeira oportunidade profissional surgiu no final de 2022, e desde então, venho aprimorando minhas habilidades e conhecimentos, especialmente em tecnologias como HTML, CSS, JavaScript, React e Typescript. Atualmente, estou me aprofundando em React e iniciando meus estudos em Node.js, sempre buscando evoluir e me desenvolver como profissional. Estou em busca de novas oportunidades que me desafiem e permitam contribuir com soluções inovadoras.
                        </p>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-3">
                        <p>PRINCIPAIS TECNOLOGIAS:</p>

                        <div className="flex gap-4 text-letterColor">
                            <FaHtml5 className="size-6"/>
                            <FaCss3 className="size-6"/>
                            <FaJs className="size-6"/>
                            <SiTypescript className="size-6" />
                            <FaReact className="size-6"/>
                            <RiTailwindCssFill className="size-6" />
                            <FaGit className="size-6" />
                        </div>
                    </div>

                    <div className="flex flex-col items-start justify-center gap-3">
                        <p>OUTRAS TECNOLOGIAS:</p>

                        <div className="flex gap-4 text-letterColor">
                            <FaNode className="size-6"/>
                            <FaAngular className="size-6"/>
                            <FaVuejs className="size-6"/>
                            <RiNextjsFill className="size-6"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 w-[50%]">
                    <div className="w-[40%] rounded-full overflow-hidden">
                        <img src="./augusto.jpg" alt="" />
                    </div>
                    
                </div>  
            </div>
        </div>
    )
}