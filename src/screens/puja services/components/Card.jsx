
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Card({ data: {attributes: p, id}}) {

//   return (
//     <div className="flex justify-evenly flex-wrap items-center py-10 px-10">
//       {/* {detail?.map((items, i) => ( */}
        
//      <Link href={`/service/${p.slug}`}>
          
//             <div
//               className="w-80 h-196 rounded-xl border border-grey-800 my-5 bg-primary">
           
//               <div className=" h-52 w-52 rounded-xl   my-5 mx-auto b">
//                     <Image
                    
//                     src="/assets/images/cities/delhi.jpg"
//                     alt={p.name}
//                     placeholder="blur"
//                     width={80}
//                     // objectFit="cover"
//                     height={80}
//                     blurDataURL="/assets/images/cities/delhi.jpg"
//                     className="w-full h-full object-cover rounded-full border-4"
//                     />
//                   </div>

//             <div className=" h-20 bg-secondary w-full rounded-b-lg text-white p-3 flex items-center justify-center text-center">
//                   <h2 className="text-2xl font-semibold">{p.name}</h2>
//                 </div>

//             </div>
//           </Link>
        
//       {/* ))} */}
//     </div>
//   );
// }

// export default Card;


// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// function Card({ data }) {
//   const [detail, setDetail] = useState([]);
//   useEffect(() => {
//     setDetail(data?.servicePages);
//   });
//   console.log(data, "a");
//   // console.log(detail, "a");

//   return (
//     <div className="flex justify-evenly flex-wrap items-center py-10 px-10">
//       {detail?.map((items, i) => (
//         <div key={i}>
//           <Link href={`/service/${items.slug}`}>
//             <div
//               className="w-80 h-96 rounded-xl border border-grey-800 my-5"
//               key={i}
//             >
//               <div className="w-full h-48 ">
//                 <Image
//                   className="w-full h-full object-cover rounded-t-lg"
//                   src={items.image.url}
//                   width={100}
//                   height={100}
//                   placeholder="blur"
//                   blurDataURL={items.image.url}
//                   alt="pandit jii"
//                 />
//               </div>
//               <div className="px-2 flex flex-col justify-evenly h-48">
//                 <h3 className="text-base font-semibold ">{items.name}</h3>
//                 <p className="text-sm">{items.description[0]}</p>
//               </div>
//             </div>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;



import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Card({ data }) {

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    setDetail(data?.servicePages);
  }, [data?.servicePages]);

  return (
    <div className="flex justify-evenly flex-wrap items-center py-10 px-10">
      {detail?.map((items, i) => (
        
     <Link href={`/service/${items.slug}`} key={i}>
          
            <div
              className="w-80 h-196 rounded-xl border border-grey-800 my-5 bg-primary">
           
              <div className=" h-52 w-52 rounded-xl   my-5 mx-auto b">
                    <Image
                    
                    src={items.image.url}
                    alt={items.name}
                    placeholder="blur"
                    width={80}
                    // objectFit="cover"
                    height={80}
                    blurDataURL="/assets/images/cities/delhi.jpg"
                    className="w-full h-full object-cover rounded-full border-4"
                    />
                  </div>

            <div className=" h-20 bg-secondary w-full rounded-b-lg text-white p-3 flex items-center justify-center text-center">
                  <h2 className="text-2xl font-semibold">{items.name}</h2>
                </div>

            </div>
          </Link>
        
      ))} 
    </div>
  );
}

export default Card;





