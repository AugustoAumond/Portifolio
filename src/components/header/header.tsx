
export default function Header(){
    return (
        <div className="fixed h-20 w-full bg-primaryColor flex items-center justify-center p-5">
            <div className="w-full max-w-7xl h-full flex justify-between items-center">
                <div className="text-letterColor text-lg md:text-2xl">
                    {'<AUGUSTO AUMOND/>'} 
                </div>

                <nav className="w-full h-full max-w-2xl flex justify-evenly items-center">   
                    <a href="#about">SOBRE</a>

                    <a href="#projects">PROJETOS</a>

                    {/* <a href="#contact">CONTATO</a> */}
                </nav>
            </div>
        </div>
    )
}