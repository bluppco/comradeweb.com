// IMPORT REACT HOOKS
import { useState } from 'react'

// IMPORT JSX LAYOUTS
import ContainerSmall from '@/layouts/container-small/jsx/index'

// IMPORT JSX COMPONENTS
import Accordion from '@/components/home/faqs/accordian/jsx/index'

// IMPORT JSX ATOMS
import HeadingTwoFourXlBoldCenter from '@/atoms/atoms-shiva/headings/two/four-xl/bold/center/jsx'
import HeadingTwoLgOrangeCenter from '@/atoms/atoms-shiva/headings/two/lg/semibold/orange/jsx'
import PictureCoverJsx from '@/atoms/picture/internal/jsx'

const AccordionSection = () => {

    const [openIndex, setOpenIndex] = useState( null )

    // HARDCODED DATA
    const data = {

        source: "/images/faq.webp",
        subtitle: "We Answer Your Marketing Questions",
        title: "FAQ",

    }
    const accordian_data = [

        {

            description: "Research. Strategy. Action. Tracking Growth. All of our digital marketing campaigns follow these steps. Research is the first step in properly assessing our clients’ pain points and growth plans in relation to their current competitive industry landscape. Next, we devise a strategy to overcome any potential obstacles to achieving our client’s revenue goals. The third step is to efficiently launch campaigns according to the strategy. Accountability is the last step — tracking our performance against key performance indicators and adjusting our plan of action as needed.",
            title: "How does your Digital Marketing Process work?",

        },
        {

            description: "We are a full-service digital marketing agency specializing in promoting and growing local service providers in the Legal, Home Service/Construction, and Healthcare industries. Although we have helped clients in a wide variety of other industries in the past, our focus remains on delivering real, tangible results to our clients. Before taking on any project or client, we make sure we have a proven plan for success in their specific industry.",
            title: "What industries do you specialize in?",

        },
        {

            description: "It is important to consider many factors when planning a marketing campaign, as every business is unique. Do you prefer to grow your business gradually but steadily or aggressively? Do you plan to include many complicated features on the website, or will it be mostly for the purpose of providing information? Each of these factors affects your overall costs. In general, high-performance websites cost between $10,000 and $40,000. Your current website’s quality and performance will determine the price of digital marketing solutions. Depending on the client, the monthly cost can range from $2,500 to over $10,000. Our marketing budget averages $4,000 per month.",
            title: "How much do your services cost?",

        },
        {

            description: "A digital marketing project is an ongoing process and while some services, like PPC, can give you quick results, for a substantive growth you’ll need time. Within 90 days of starting an SEO campaign, we typically see tangible results, accompanied by a steady rise in sales. However, you can begin seeing results from PPC campaigns within a month. It is critical to remember that each of your marketing tactics has a place in your overall strategy, so don’t overlook SEO or content because of their longer ramp-up time. Our team will gladly explain the reasons behind this to you during your consultation.",
            title: "How long will it take to see improvements in sales?",

        },

    ]

    // OPEN CLOSE ACCORDIAN
    const handleToggle = ( index ) => {

        setOpenIndex( openIndex === index ? null : index )

    }

    return (

        <section className="py-14" style={{ background: 'linear-gradient(180deg, #e7eff6, #fff 50%)' }}>
            <ContainerSmall>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <HeadingTwoLgOrangeCenter>{ data.title }</HeadingTwoLgOrangeCenter>
                        <HeadingTwoFourXlBoldCenter>{ data.subtitle }</HeadingTwoFourXlBoldCenter>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-4">
                            {
                            
                                accordian_data.map( ( data, index ) => (

                                    <Accordion
                                        description={ data.description }
                                        isOpen= { openIndex === index }
                                        onToggle={ () => handleToggle( index )}
                                        title={ data.title }
                                    />

                                ))
                            
                            }
                        </div>
                        <div className="flex justify-center">
                            <div className="rounded-xl overflow-hidden size-[460px]">
                                <PictureCoverJsx
                                    alternativeText=""
                                    source={ data.source }
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </ContainerSmall>
        </section>

    )

}
export default AccordionSection
