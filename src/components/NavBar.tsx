import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="hidden lg:flex justify-between items-center">
            <Link href="/">
                <Image width={200} height={40} src="/assets/logo-app.png" alt="VitalPro-logo" className="h-auto" preload={true} />
            </Link>
            <div className="flex gap-4 lg:gap-16 font-[Roboto_Condensed] font-medium md:text-base lg:text-xl">
                <a href="/planes" className="text-[#212121]">Nuestros planes</a>
                <a href="/coach" className="text-[#212121]">Tu Coach</a>
            </div>
            <div className="flex gap-5">
                <button id="btn-loginHome" className="bg-[#BDBDBD] py-1 px-6 font-[Montserrat] font-semibold rounded-lg text-[#FFFFFF] text-base">Iniciar Sesión</button>
                <button id="btn-registerHome" className="bg-[#E64A19] py-1 px-6 font-[Montserrat] font-semibold rounded-lg text-[#FFFFFF] text-base">Crear cuenta</button>
            </div>
        </nav>
    )
}

export default NavBar;