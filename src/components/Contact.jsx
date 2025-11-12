import React from "react"
import {FaGithub  } from "react-icons/fa";
export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-zinc-200 sm:text-sm text-black-300">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="font-bold text-green-500mb-8 sm:flex-col">Let's Work Together</h2>
        <p className="text-xl mb-8 sm:flex-col">abejeashenafi460@gmail.com • +251929494039</p>
        <div className="flex justify-center gap-8 text-4xl">
      <a
  href="https://github.com/abejeashenafi460-marker"  // your real username
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-800 text-4xl hover:text-gray-600 transition-colors"
>
  <FaGithub />
</a>
      </div>
      </div>
    </section>
  )
}