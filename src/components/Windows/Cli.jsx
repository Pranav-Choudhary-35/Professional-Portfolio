import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => 'I am a full-stack web developer passionate about building modern web applications with React, Node.js, and AI technologies.'
        },
        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Frontend: React, Vanilla JS, Sass, HTML/CSS
Backend: Node.js, Express
Databases: MongoDB, MySQL
Tools: Git, Github, linux, Vite`
        },
        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Portfolio Website - React + Vite
2. Wonder-Stay Platform - MERN Stack
3. Productivity Management App - MERN Stack
4. Real-time Chat App - Node.js, EJS, SQL
5. User-Hub - Node.js, EJS, SQL`
        },
//         experience: {
//             description: 'Display work experience',
//             usage: 'experience',
//             fn: () => `Senior Developer @ Tech Corp (2022 - Present)
//   - Led development of 5+ React applications
//   - Mentored junior developers

// Full Stack Developer @ Web Solutions (2020 - 2022)
//   - Built scalable APIs with Node.js
//   - Designed responsive UIs with React`
//         },
        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Email: pranavchoudhary498@gmail.com
Phone: +91 9910465693
Location: Himachal Pradesh, India`
        },
        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Pranav-Choudhary-35', '_blank')
                return 'Opening GitHub...'
            }
        },
        resume: {
            description: 'Download resume',
            usage: 'resume',
            fn: () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'  
    link.download = 'Pranav_Choudhary_Resume.pdf' 
    link.click()
    return 'Resume download started...'
  }
        },
        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `Twitter: @pranav_p1005
LinkedIn: /in/pranav-cse
Portfolio: pranavchoudhary.dev`
        },
        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch
  • github    - Github Profile
Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'pranavchoudhary:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli