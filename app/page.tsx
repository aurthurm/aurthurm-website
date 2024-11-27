import React from 'react';
import Image from "next/image";
import Head from "next/head";
import { Github, Linkedin, XIcon, MailIcon, GlobeIcon } from "lucide-react";

// Project list configuration
const projects = [
  "Laboratory Information Management System (LIMS)",
  "Electronic Sample Tracking (ESTS)",
  "EHR-LIMS Integration",
  "National Laboratory Dashboard",
  "Central Data Repository",
  "Instrument Interfacing"
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/aurthurmusendame/",
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/aurthurm",
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://x.com/a_musends",
    icon: <XIcon className="w-5 h-5" />,
    label: "Twitter",
  },
  {
    href: "mailto:aurthurmusendame@gmail.com",
    icon: <MailIcon className="w-5 h-5" />,
    label: "Email",
  },
  {
    href: "https://beakinsights.com/",
    icon: <GlobeIcon className="w-5 h-5" />,
    label: "BeakInsights",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Aurthur Musendame - Senior Software Engineer</title>
        <meta name="description" content="Personal portfolio of Aurthur Musendame, Senior Software Engineer at NMRL specializing in healthcare systems and open source development." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-200 to-white flex items-center justify-center">
        <main className="container mx-auto px-4 max-w-4xl py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 border-r border-slate-400 pr-12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/aurthur.webp"
                  alt="Aurthur Musendame"
                  width={400}
                  height={600}
                  className="object-cover w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Aurthur Musendame</h1>
                <div className="flex flex-wrap gap-1 justify-center">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center gap-1 px-1 py-1 rounded-md text-gray-600 hover:text-gray-900 transition-all duration-200 border border-gray-400 hover:border-gray-600 hover:bg-gray-50"
                      aria-label={`Connect with Aurthur on ${link.label}`}
                    >
                      <span>{link.icon}</span>
                      <span className="text-sm">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 text-lg">
              <div>
                <p className="text-gray-800 leading-relaxed">
                  Hi! I'm Aurthur Musendame, a senior software engineer at the{" "}
                  <a 
                    href="https://nmrl.org.zw"
                    className="text-blue-600 hover:text-blue-800 font-medium underline italic transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NMRL
                  </a>{" "}
                  where among other things I build systems that drive result return. I am involved 
                  in developing projects that are aimed at improving the quality of healthcare in Zimbabwe such as:
                </p>
                
                <ul className="ml-4 mt-4 space-y-2 list-disc list-inside text-gray-700">
                  {projects.map((project, index) => (
                    <li key={index} className="hover:text-gray-900 transition-colors">
                      {project}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-gray-700 leading-relaxed">
                  I love building things, and as a huge fan of open source, I'm always looking for ways to contribute to the community. 
                  Some of my hobby projects include:{" "}
                  <a 
                    href="https://github.com/beak-insights/felicity-lims"
                    className="text-blue-600 hover:text-blue-800 font-medium underline italic transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Felicity LIMS
                  </a>
                  {", "}
                  <a 
                    href="https://github.com/beak-insights/felicity-lablink"
                    className="text-blue-600 hover:text-blue-800 font-medium underline italic transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Felicity LabLink
                  </a> 
                  {" "}
                  and 
                  {" "}
                  <a 
                    href="https://www.mql5.com/en/users/aurthurm/seller"
                    className="text-blue-600 hover:text-blue-800 font-medium underline italic transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MQL5 Products
                  </a>
                </p>
                <hr className="my-6 border-gray-300" />
                <p className="text-gray-700 leading-relaxed">
                  Feel free to get in touch with me so that we can explore the world together.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}