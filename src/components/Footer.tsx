import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="bg-[#FFCCBC] w-full p-6 flex flex-col justify-center items-center gap-4 pb-12">
            <span className='text-[#212121] font-[Montserrat] font-bold text-base lg:text-xl'>Únete a nuestra comunidad</span>
            <div className='flex items-center gap-2'>
                <Image
                    src="/assets/iconInstagram.png"
                    alt="iconInstagram"
                    width={24}
                    height={24}
                    preload={true}
                />
                <Image
                    src="/assets/whatsapp.png"
                    alt="iconwhatsapp"
                    width={24}
                    height={24}
                    preload={true}
                />
                <Image
                    src="/assets/iconFacebook.png"
                    alt="iconFacebook"
                    width={24}
                    height={24}
                    preload={true}
                />
            </div>
            <span className='text-[#212121] font-[Roboto] font-bold text-base lg:text-lg'>VITALPRO 2025 ®</span>
        </footer>
    );
};

export default Footer;