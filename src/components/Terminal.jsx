import React from 'react'
import './Terminal.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";




const Terminal = () => {

  const prompt = useRef(null);

  useEffect(() => {
    const typed = new Typed(prompt.current, {
      // strings: ["$ I am christian Bueno<br>new line"], // Strings to display
      strings: ["$ I am Christian Bueno<br>A Web developer, programmer, fronted, backend.Open Source enthusiast.<br><br><strong>Experience</strong>.<br>For scripting BASH or ZSH shell.<br>For containers docker, podman.<br>Linux distribution: Ubuntu, Fedora, Rocky, AlmaLinux, Manjaro.<br>virtualization tools: KVM, libvirt.<br>Server administration."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 0,
      backDelay: 8000,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='mb-4 -z-10 '>
      <div className="terminal-window h-96">
        <header>
          <div className="button green" />
          <div className="button yellow" />
          <div className="button red" />
        </header>
        <section className="terminal">
          <div className="history" />
          <span className="prompt" ref={prompt} />
          <span className="typed-cursor" />
        </section>
      </div>
    </div>
  )
}

export default Terminal