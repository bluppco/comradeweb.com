// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';
// // import "swiper/css/navigation"

// // // import required modules
// // import { Autoplay } from "swiper/modules"
// // import { Pagination } from 'swiper/modules';


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // IMPORT JSX COMPONENT
// import Stars from "@/components/home/reviews/stars/index.jsx"

// // IMPORT ASTRO ATOMS
// import Link from "@/atoms/links/index.astro"
// import HeadingFourBold from "@/atoms/atoms-nandini/headings/four/bold/index.astro"
// import ParagrapExtraSmallBlue from "@/atoms/atoms-nandini/paragraphs/xs/blue/index.astro"
// import ParagraphItalic from "@/atoms/atoms-nandini/paragraphs/italic/index.astro"

// // CARD ARRAY
// const cards =[

//     {
//         alternative_text:"Image",
//         description:"Driving consistent yearly growth with their experience and consulting, Comrade Marketing Agency has proven itself to be a dedicated digital marketing company. Internal stakeholders for the client praise Comrade for their attentiveness and preparation. Customers can expect an available partner.",
//         indetail:"View case",
//         icon_source:"/icon/review-facebook.svg",
//         image_source:"/image/review-1.webp",
//         link:"/portfolio/blackhawk-supply/",
//         title:"Jo Ann, COO / Blackhawk Supply",
//     },
//     {
//         alternative_text:"Image",
//         description:"The new website has seen an increase in traffic, lead conversion, and sales, meeting the expectations of the internal team. Comrade Digital Marketing Agency is a quick-working and efficient internet marketing company, establishing an effective workflow. The team is professional, driven, and knowledgeable.",
//         indetail:"View case",
//         icon_source:"/icon/reviews-google.svg",
//         image_source:"/image/review-2.webp",
//         link:"/portfolio/american-tent/",
//         title:"Elizabeth Paulson, CMO / American Tent",
//     },
//     {
//         alternative_text:"Image",
//         description:"Website traffic has increased significantly since the engagement began, along with the ROI and leads generated. The vendor leads a research-backed, thorough approach complemented by well-structured task management. They go above and beyond, doing everything they can to help stakeholders succeed.",
//         indetail:"View case",
//         icon_source:"/icon/reviews-trustpilot.svg",
//         image_source:"/image/review-3.webp",
//         link:"/portfolio/the-international-kitchen/",
//         title:"Peg Kern, COO / The International Kitchen",
//     },

// ]

// const card = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     };

//     return (
//         <section>

//             <Slider {...settings}>

//         {

//             cards.map( ( item ) => (


//         <div class="border p-4">
//         <div class="flex justify-between pb-5">
//             <div class="flex">
//                 <Stars/>
//             </div>
//             <div class="w-20 aspect-[4/1]">
//                 <PictureInternal
//                     alternative_text={ item.alternative_text }
//                     source={ item.icon_source }
//                 />
//             </div>
//         </div>
//         <div class="space-y-10">
//             <div class="flex gap-2">
//                 <div class="w-20 aspect-[1/1] rounded-xl overflow-hidden">
//                     <PictureInternal
//                         alternative_text={ item.alternative_text }
//                         source={ item.image_source }
//                     />
//                 </div>
//             </div>
//         </div>
//     </div>
//             ))
//         }
//         </Slider>
//     </section>

//     )

// }

//         // <div>
//         //     <div className="mt-20">
//                 // {
                
//                 //     logos.map( ( logo ) => (
//                 //     <div className="border p-4">
//                 //         <div className="flex justify-between pb-5">
//                 //                             <div className="flex">
//                 //                                 <Stars/>
//                 //                             </div>
//                 //                             <div className="w-20 aspect-[4/1]">
//                 //                                 <PictureInternal
//                 //                                     alternative_text={ item.alternative_text }
//                 //                                     source={ item.icon_source }
//                 //                                 />
//                 //                             </div>
//                 //                         </div>
//                 //     </div>
//                 // ))}
//         //     </div>
//         // </div>
//     // )


// export default card;