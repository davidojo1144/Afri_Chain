import { CiLock } from "react-icons/ci";
import { TbCapture } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { PiAirTrafficControlFill } from "react-icons/pi";
import { IoBagCheckSharp } from "react-icons/io5";


export default function Hero() { 
    
    const heroContents = [
        {
            image: <CiLock className='w-[40px] h-[40px] text-blue-950'/>,
            headerText: 'stop counterfeiting',
            story: 'With our market-leading brand protection technology and digital platform,'+
             'you can reliably identify originals, spot counterfeit products worldwide and remove them from the market.'
        },
        {
            image: <IoBagCheckSharp className='w-[40px] h-[40px] text-blue-900'/>,
            headerText: 'Avoid grey markets',
            story: 'Detect grey market suppliers with our reliable, practicable security tags.'
        },
        {
            image: <PiAirTrafficControlFill className='w-[40px] h-[40px] text-blue-900'/>,
            headerText: 'Control Quantities',
            story: 'Identify illegal products produced in the ‘third shift’ with our counterfeit-proof security tags and digital platform.'
        },
        {
            image: <BsStars className='w-[40px] h-[40px] text-blue-900'/>,
            headerText: 'Manage Licensing Business',
            story: 'Our licensing management solution allows you to manage your licenses centrally, protect your brand and open avenues for customer interaction.'
        },
        {
            image: <TbCapture className='w-[40px] h-[40px] text-blue-900'/>,
            headerText: 'Initiate Customer Interaction',
            story: 'With our smart labels and markings, you can create touchpoints for customer engagement, which helps strengthen brand loyalty and gather valuable market data.'
        },
    ]

    return (
        <main className='flex flex-col items-center pt-[30px]'>
            <h5 className='text-[1.4rem] font-[650] py-2'>Unlocking multiple benefits</h5>
            <p className='text-[0.9rem] px-[2rem] pb-[20px] text-center'>
                By integrating just one of our solutions, you can unlock a multitude of benefits that will elevate your brand protection efforts to new heights.
            </p>
            <section className='flex flex-wrap items-center justify-around md:px-3 gap-3'>
                { 
                    heroContents.map((data,index) => (
                        <div key={index}
                            className='flex flex-col justify-center items-center gap-2 w-[270px] md:w-[400px] h-[220px] border-[1px] rounded transform duration-[300] transition hover:shadow-lg'>
                            {data.image}
                            <article className='flex flex-col w-full justify-center items-center text-center'>
                                <h6 className='text-[1.1rem] font-[600] text-black'>{data.headerText}</h6>
                                <p className='hidden md:flex text-center text-[0.9rem] font-[400]  text-gray-800 px-4'>{data.story}</p>
                            </article>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}