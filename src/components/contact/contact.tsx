import { FaFile, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact(){
    return (
        <div id="contact" className="w-full flex justify-center items-center p-10 md:p-20 z-10">
            <div className="w-[100%] md:w-[80%] max-w-[750px] flex flex-col items-start border-2 border-letterColor p-5 gap-5">
                <h1 className="text-1xl md:text-3xl">CONTATO</h1>

                <p className="text-sm md:text-lg text-letterColor">Gostou do meu trabalho e gostaria de descutir algum projeto, colaborar em uma ideia ou então apenas dizer olá? Estou disponível para conversas e sempre interessado em novas oportunidades. Sinta-se à vontade para entrar em contato pelos meios abaixo:</p>

                <div className="text-sm md:text-lg flex gap-2 items-center justify-start hover:text-letterColor">
                    <a className="flex gap-2 items-center justify-start" target="_blank" href="https://wa.me/5551992206521">
                        <FaWhatsapp className="size-4 md:size-6" />: (51) 9 9220-6521
                    </a>
                </div>

                <div className="text-sm md:text-lg flex gap-2 items-center justify-start">
                    <MdEmail className="size-4 md:size-6" />: augustoaumondrs@gmail.com
                </div>

                <div className="text-sm md:text-lg">
                    <a className="flex gap-2 items-center justify-start hover:text-letterColor" href="https://www.linkedin.com/in/augusto-sturmer-176227207/" target="_blank">
                        <FaLinkedin className="size-4 md:size-6" />: https://www.linkedin.com/in/augusto-sturmer-176227207/
                    </a>
                </div>

                <div className="text-sm md:text-lg">
                    <a className="flex gap-2 items-center justify-start hover:text-letterColor" href="https://github.com/AugustoAumond" target="_blank">
                        <FaGithub className="size-4 md:size-6" />: https://github.com/AugustoAumond
                    </a>
                </div>

                <div className="text-sm md:text-lg">
                    <a className="flex gap-2 items-center justify-start hover:text-letterColor" href="./Curriculo Augusto.pdf" download="./Curriculo Augusto.pdf">
                        <FaFile className="size-4 md:size-6" />: Curriculum Augusto
                    </a>
                </div>
            </div>

        </div>
    )
}