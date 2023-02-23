import React from 'react'
import './Terminal.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";




const Terminal = () => {

  const prompt = useRef(null);

  useEffect(() => {
    const typed = new Typed(prompt.current, {
      // strings: ["$ I am christian Bueno<br>new line"], // Strings to display
      strings: [`$ I am Christian Bueno<br>
      A Full Stack Web Developer, Django Developer, Flask Developer, Python Developer, Fronted UI Developer, Backend Developer.<br>
      Linux server administrator.<br>
      Containerization Developer.<br>
      Automation Developer, DevOps engineer<br><br>
      <strong>Tools.</strong><br>
      The scripting language, BASH.<br>
      To control containers, docker, podman.<br>
      Linux server distribution: Debian, Ubuntu, RHEL, Fedora, Rocky Linux, AlmaLinux.<br>
      For Virtualization, KVM, libvirt, vagrant.`], // Strings to display
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
    <div className='mb-4 '>
      <div className="terminal-window h-[464px] sm:h-96">
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