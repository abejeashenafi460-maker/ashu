import React from "react"
import { MdEmail } from "react-icons/md"; 

import {FaGithub,FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-200 sm:text-sm text-black-300 flex">
      <div className="max-w-4xl mx-auto text-center px-6 lg:flex">
       <p className="sm:text-sm  sm:text-gray-400 lg:text-top">lets do together contact me with the following addresses</p>
 <a href="https://github.com/abejeashenafi460-maker/ashu.git"  // your real username
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-800 text-4xl hover:text-gray-600 transition-colors"
>
  <FaGithub />
</a>
    
   <a
  href="mailto:abejeashenafi460@gmail.com"  // your real username
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-800 text-4xl hover:text-gray-600 transition-colors"
>
  <MdEmail />
</a>
 </div>
</section>
  )
}