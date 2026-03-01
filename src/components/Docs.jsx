import React from 'react'
import './docs.scss'

const Docs = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img src='/doc-icons/github.svg'/></div>
        <div className="icon note"><img src='/doc-icons/note.svg'/></div>
        <div className="icon pdf"><img src='/doc-icons/pdf.svg'/></div>
        <div className="icon calender"><img src='/doc-icons/calender.svg'/></div>
        <div className="icon spotify"><img src='/doc-icons/spotify.svg'/></div> 
        <div className="icon mail"><img src='/doc-icons/mail.svg'/></div>
        <div className="icon link"><img src='/doc-icons/link.svg'/></div>
        <div className="icon cli"><img src='/doc-icons/cli.svg'/></div>
    </footer>
  )
}

export default Docs