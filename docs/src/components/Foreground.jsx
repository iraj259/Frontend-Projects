import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion";

function Foreground() {

    const ref = useRef(null);

    const data = [
       { desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore a error quas esse.", filesize: ".9mbv", close: true, tag:{
        isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
     },
     { desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore a error quas esse.", filesize: ".9mbv", close: true, tag:{
        isOpen: true, tagTitle: "Download Now", tagColor: "green"},
     },
     { desc : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore a error quas esse.", filesize: ".9mbv", close: true, tag:{
        isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
     },
    ];
    
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
     {data.map((item, index)=>(
        <Card data={item} reference={ref}  />
     ))}
    </div>
  )
}

export default Foreground
