import React, { useEffect, useState } from 'react'
// import react_logo from '../../assets/react_logo.png'
import react_logo from '../../assets/react-js-icon.svg'
import javascript_logo from '../../assets/javascript-programming-language-icon.svg'
import html_logo from '../../assets/html-icon.svg'
import css_logo from '../../assets/css-icon.svg'
import sass_logo from '../../assets/sass-icon.svg'
// import next_logo from '../../assets/nextjs-icon.svg'
import bootstrap_logo from '../../assets/bootstrap-5-logo-icon.svg'
import git_logo from '../../assets/git-icon.svg'
import postman_logo from '../../assets/postman-icon-svgrepo-com.svg'
import tailwind_logo from '../../assets/tailwind-css-icon.svg'
import bw_react from '../../assets/bw-react.svg'
import bw_javascript from '../../assets/bw-javascript.svg'
import bw_css from '../../assets/bw-css.svg'
import bw_html from '../../assets/bw-html.svg'
import bw_git from '../../assets/bw-git.svg'
import bw_sass from '../../assets/bw-sass.svg'
import bw_bootstrap from '../../assets/bw-bootstrap.svg'

export default function Skills() {
    const [activeTechnology, setActivetechnology] = useState(react_logo)


    return (
        <>
            <div className='row'>
                <p className='h2 text-center text-md-start'>technologies</p>
                <hr style={{ color: "red" }} />
                <div className='col-6 col-md-4 py-4' style={{ lineHeight: "2.2rem" }}>
                    <ul className='tecnologies-list'>
                        <li onClick={() => setActivetechnology(javascript_logo)} className='cursor-pointer' id={activeTechnology === javascript_logo ? "active-red" : ""}>javascript</li>
                        <li onClick={() => setActivetechnology(react_logo)} className='cursor-pointer' id={activeTechnology === react_logo ? "active-red" : ""} >react.js</li>
                        <li onClick={() => setActivetechnology(html_logo)} className='cursor-pointer' id={activeTechnology === html_logo ? "active-red" : ""}>html</li>
                        <li onClick={() => setActivetechnology(css_logo)} className='cursor-pointer' id={activeTechnology === css_logo ? "active-red" : ""}>css</li>
                        <li onClick={() => setActivetechnology(sass_logo)} className='cursor-pointer' id={activeTechnology === sass_logo ? "active-red" : ""}>sass</li>
                        <li onClick={() => setActivetechnology(bootstrap_logo)} className='cursor-pointer' id={activeTechnology === bootstrap_logo ? "active-red" : ""}>bootstrap</li>
                        <li onClick={() => setActivetechnology(tailwind_logo)} className='cursor-pointer' id={activeTechnology === tailwind_logo ? "active-red" : ""}>tailwind</li>
                        <li onClick={() => setActivetechnology(git_logo)} className='cursor-pointer' id={activeTechnology === git_logo ? "active-red" : ""}>git</li>
                        <li onClick={() => setActivetechnology(postman_logo)} className='cursor-pointer' id={activeTechnology === postman_logo ? "active-red" : ""}>postman</li>
                    </ul>
                </div>
                <div className='col-6 col-md-8 d-flex flex-column align-items-between justify-content-center '>
                    <div className='p-0 p-md-5 mt-3'>
                        <img src={activeTechnology} alt="react_logo" className='logo-animation' />
                    </div>
                    <div className='d-flex justify-content-start mt-auto mb-5 d-none d-md-inline'>
                        <img onClick={() => setActivetechnology(javascript_logo)} src={bw_javascript} alt="bw-react" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(react_logo)} src={bw_react} alt="bw-react" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(html_logo)} src={bw_html} alt="bw-react" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(css_logo)} src={bw_css} alt="bw-react" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(git_logo)} src={bw_git} alt="bw-react" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(sass_logo)} src={bw_sass} alt="bw-sass" className='bw-logo p-3 cursor-pointer' />
                        <img onClick={() => setActivetechnology(bootstrap_logo)} src={bw_bootstrap} alt="bw-bootstrap" className='bw-logo p-3 cursor-pointer' />
                        {/* <img src={bw_react} alt="bw-react" className='bw-logo p-3 cursor-pointer' /> */}
                    </div>
                </div>

            </div>
        </>
    )
}
