// import React from 'react'
// import './Home4.css'
// import Image from 'next/image'
// import sense from '../Assets/image3.png';

// const page = () => {
//   return (
//    <>
//    <body className='relative'>
//     <div className='absolute'>
//         <p className='texture ml-28 mt-20 text-4xl font-medium leading-9 text-4xl text-gray-500 leading-9 '>
//         A <span className='text-purple-600 font-semibold'>Four-Day</span> training on ISO15189 : 2022 will</p>
//         <p className='absolute text-4xl ml-28 leading-9 mt-6 text-gray-500 font-medium'>transform your career</p>
//         <div className="absolute">
//             <p className='new text-9xl font-bold text-gray-400 ml-28 mt-24'>Day-4</p>
//         </div>
//         <div className='ml-64'>
//         <div class="absolute ml-96 mt-12">
//             <div className='new w-[372px] h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 ml-96 mt-10 shadow-lg bg-gray-100'>
//         <Image className='w-[346px] h-[346px] ml-2 mt-3'
//         src={sense}  // Path to your image
//         alt="Description of the image"
//       />
//         <p className='absolute text-3xl ml-4 leading-10 font-medium'>Details of ISO: 15189</p>
//         <p className='ml-4 mt-10 leading-none'>Clause wise description of ISO: 15189</p>
//         <p className='ml-4 mt-2 font-bold text-purple-700'>Read more</p>
//         </div>    
//         </div>
//         </div>
//         <div className='absolute'>
//             <p className='texture ml-28 mt-72 text-3xl font-medium text-3xl text-gray-300 tracking-wider'>
//             <span className='text-purple-600'>Day</span> 3 of the Quality Manager Course focuses on assessing <span className='text-purple-600'>participants'</span> practical application of <span className='text-purple-600'>ISO</span> <span className='text-purple-600'>15189:2012</span> concepts. The day is designed to <span className='text-purple-600'>evaluate</span> their ability to <span className='text-purple-600'>implement</span> a quality management system within a medical laboratory <span className='text-purple-600'>setting.</span>
//             </p>
             
//         </div>
// </div>
//         </body>
//    </>
//   )
// }

// export default page
import Link from 'next/link';
import React from 'react';
import sense from '../../public/image3.png';
import './Home4.css'
import Image from 'next/image'
import { Space_Mono } from 'next/font/google';
// const CardContent = () => {
//   return (
//     <>
//       <p className='absolute text-2xl ml-4 leading-10 font-medium'>Basics of NABL</p>
//       <p className='ml-4 mt-10 leading-none'>Get to know the basics</p>
//       <p className='ml-4 mt-2 font-bold text-purple-700'>Read more</p>
//     </>
//   );
// };

// const CardImage = ({ imagePath, imageAlt }) => {
//   return (
//     <Image className='w-[346px] h-[346px] ml-3 mt-3' src={sense} alt={imageAlt} />
//   );
// };

// const Card = ({ imagePath, imageAlt }) => {
//   return (
//     <div className='new w-[373px] h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 shadow-lg'>
//       <CardImage imagePath={imagePath} imageAlt={imageAlt} />
//       <CardContent />
//     </div>
//   );
// };




// const Home4 = () => {
//   return (
//     <>
//     <div className='flex max-h-full md:max-h-screen justify-center max-w-full h-[100vh] '>
      
//   <div className='flex px-24 items-center flex-col items-center max-h-full max-w-full md:max-h-screen justify-center h-[100vh] '>
//     <div className='text-4xl font-medium leading-1 text-gray-500'>
//       <p className='leading-1'>
//         A <span className='text-purple-600 font-semibold'>Four-Day</span> training on ISO15189 : 2022 will
//         <br/>transform your career
//       </p>
//       <div>
//       <div className="mt-24">
//         <p className='color text-9xl font-bold text-color-#888'>Day-4</p>
//       </div>
//       <div className='mt-8 lg:mt-16 bg-red'>
//         <p className='text-sm lg:text-3xl text-gray-300 lg:leading-normal tracking-wider'>
//           "<span className='text-purple-600'>Unlock</span> your career potential as a<br/> Quality Manager—architects of <br/> excellence. As a <span className='text-purple-600'>pivotal force</span> <br/> ensuring <span className='text-purple-600'>top-tier quality</span> standards,<br/>you'll spearhead continuous <span className='text-purple-600'>improvement</span>,<br/> shape organizational success,<br/> <span className='text-purple-600'>triple your impact.</span>"
//         </p>
//         </div>
//       </div>  
//     </div>
//   </div>

  
//   <div className='flex max-h-full md:max-h-screen justify-center h-full justify-center items-end'>
//   <div className='new px-24 flex-col max-h-full w-full h-3/4 '> 
//     <div className='flex justify-center mt-auto'>
      
//       <Card></Card>
    
//     </div>
//   </div>
// </div>
// </div>



//     </>
//   );
// };

const CardContent = () => {
  return (
    <>
      <p className='absolute text-semibold lg:text-lg lg:text-2xl ml-2 lg:ml-4 leading-4 lg:leading-10 font-medium'>Basics of NABL</p>
      <p className='ml-2 mt-4 lg:ml-4 lg:mt-6 lg:mt-10 text-semibold lg:text-lg leading-none'>Get to know the basics</p>
      <p className='mt:ml-4 ml-2 lg:mt-2 font-light lg:font-semibold lg:bold text-purple-700'>Read more</p>
    </>
  );
};

const CardImage = ({ imagePath, imageAlt }) => {
  return (
    <Image className='w-full lg:w-[346px] h-[195px] lg:h-[346px] ml-px lg:ml-3 mt-px lg:mt-3' src={sense} alt={imageAlt} />
  );
};

const Card = ({ imagePath, imageAlt }) => {
  return (
    <div className='new w-full lg:w-[373px] h-[280px] lg:h-[490px] bg-white rounded-xl border border-solid border-2 border-gray-200 shadow-lg'>
      <CardImage imagePath={imagePath} imageAlt={imageAlt}/>
      <CardContent />
    </div>
  );
};


const Home4 = () => {
  return (
    <>
    <div className='flex justify-center border-dashed border-2 border-purple-600 ... mt-28'>
      <div className='flex flex-col lg:mt-8 px-4 lg:px-24'>
        <p className='text-base lg:text-4xl lg:font-medium leading-8 lg:leading-1 text-gray-500'>
          A <span className='text-purple-600 font-light lg:font-semibold'>Four-Day</span> training on ISO15189 : 2022 will transform your career
        </p>
        <div className='mt-8 lg:mt-24'>
          <p className='color text-3xl lg:text-9xl lg:font-bold text-gray-400'>Day-4</p>
        </div>
        <div className='mt-8 lg:mt-16 bg-red'>
        <p className='text-sm lg:text-3xl text-gray-300 lg:leading-normal tracking-wider'>
          "<span className='text-purple-600'>Unlock</span> your career potential as a<br/> Quality Manager—architects of <br/> excellence. As a <span className='text-purple-600'>pivotal force</span> <br/> ensuring <span className='text-purple-600'>top-tier quality</span> standards,<br/>you'll spearhead continuous <span className='text-purple-600'>improvement</span>,<br/> shape organizational success,<br/> <span className='text-purple-600'>triple your impact.</span>"
        </p>
        </div>
      </div>
      <div class='flex-col lg:flex-col lg:mt-28 mr-8 lg:max-h-full h-32 lg:max-h-screen items-end'>
        <div class='new mt-8 lg:mt-0 lg:px-4 lg:px-24 flex-col lg:max-h-full lg:w-full lg:h-auto'>
          <div class='lg:flex justify-center mt-8 lg:mt-20 lg:mt-auto'>
            <Card />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home4









