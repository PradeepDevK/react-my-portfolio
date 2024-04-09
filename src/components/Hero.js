import HeroImage from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'I am a Full-Stack Developer',
        social: {
            twitter: '#',
            insta: "#",
            linkedIn: "#",
            github: "#"
        }
    };

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-4xl font-hero-font'>
                Hello, <br /> I am <span className='text-black'>PradeepRaj</span>(He/Him)
                <p className='text-2xl'>
                    {config.subtitle}
                </p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
                <a href={config.social.insta} className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                <a href={config.social.linkedIn} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                <a href={config.social.github} className='hover:text-white'><AiOutlineGithub size={40} /></a>
            </div>
        </div>
        <img className='md:w-1/3 ' src={HeroImage}/>
    </section>
}