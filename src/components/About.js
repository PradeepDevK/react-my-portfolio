import AboutImage from '../assets/about.png';

export default function About() {
    const config = {
        line1: 'Hello, My name is PradeepRaj. I am a Full stack web developer. I built beautiful website with React.js and Tailwind CSS',
        line2: 'I am proficient in Frontend skills....',
        line3: 'In backend I know....'
    };

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImage } />
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>            
        </div>
    </section>
}