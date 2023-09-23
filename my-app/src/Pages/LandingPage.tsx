import React, { useEffect, useRef, useState } from 'react';
import { useSpring, a } from '@react-spring/web';
import useMeasure from 'react-use-measure';
import { Container, Title, Frame, Content, toggle } from '../components/TreeSelector/styles';
import * as Icons from '../components/TreeSelector/icons';
// import AboutPage from '../components/Results/AboutPage';
import Education from '../components/Results/Education';
import Experience from '../components/Results/Experience';
import Hello from '../components/Results/Hello';
import Skills from '../components/Results/Skills';
import About from '../components/Results/About';
import Portfolio from '../components/Results/Portfolio';
import { Contactform } from '../components/Results/Contactform';




const LandingPage: React.FC = () => {

    // const [resultContent, setResultContent] = useState(<AboutPage />)
    const [nightMode, setNightMode] = useState(true);
    const hello = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const skills = useRef<HTMLDivElement>(null);
    const education = useRef<HTMLDivElement>(null);
    const experience = useRef<HTMLDivElement>(null);
    const portfolio = useRef<HTMLDivElement>(null);
    const contactme = useRef<HTMLDivElement>(null);


    const scrollToAbout = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const handleToggle = () => {
        setNightMode((prevNightMode) => !prevNightMode);
        // console.log("nightMode=====>", nightMode);

    }


    function usePrevious<T>(value: T) {
        const ref = useRef<T>()
        useEffect(() => void (ref.current = value), [value])
        return ref.current
    }

    const Tree = React.memo<
        React.HTMLAttributes<HTMLDivElement> & {
            defaultOpen?: boolean
            name: string | JSX.Element
        }
    >(({ children, name, style, defaultOpen = false }) => {
        const [isOpen, setOpen] = useState(defaultOpen)
        const previous = usePrevious(isOpen)
        const [ref, { height: viewHeight }] = useMeasure()
        const { height, opacity, y } = useSpring({
            from: { height: 0, opacity: 0, y: 0 },
            to: {
                height: isOpen ? viewHeight : 0,
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
            },
        })
        // @ts-ignore
        const Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> =
            Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
        return (
            <Frame>
                <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
                <Title style={style}>{name}</Title>
                <Content
                    style={{
                        opacity,
                        height: isOpen && previous === isOpen ? 'auto' : height,
                    }}>
                    <a.div ref={ref} style={{ y }} children={children} />
                </Content>
            </Frame>
        )
    })

    const Navbar = () => {
        return (
            <nav className={`navbar navbar-expand-xlg navbar-light bg-transparent navbar-fixed-top ${nightMode ? 'navbar-dark' : 'navbar-light'} `}>
                <button
                    className="d-md-none "
                    style={{ border: "none", backgroundColor: "transparent" }}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo03"
                    aria-controls="navbarTogglerDemo03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    id='nav-toggle'
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand d-none d-md-block" href="www.google.com" >
                    vyshnav_pokkat
                </a>
                {/* <div className="form-check form-switch d-flex align-items-end">
                    <input className="form-check-input cursor-pointer" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={nightMode} onChange={handleToggle} />
                </div> */}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 d-md-none py-5 overlay">
                        <hr className='mb-5'/>
                            {TreeSelector()}
                        <hr className='mt-5'/>
                    </ul>
                </div>

            </nav>
        )
    }
    const TreeSelector = () => {
        return (
            <Container>
                <Tree name="main" defaultOpen>
                    {/* <Tree name="hello" id='hello-sample'/> */}
                    <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                    </svg>
                    <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => { scrollToAbout(hello) }} data-toggle="collapse" data-target="#navbarTogglerDemo03">hello</span>
                    <Tree name="i_Am" defaultOpen>
                        <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                        </svg>
                        <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(about)} data-toggle="collapse" data-target="#navbarTogglerDemo03">about_me</span><br />

                        <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                        </svg>
                        <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(skills)} data-toggle="collapse" data-target="#navbarTogglerDemo03">technologies</span><br />

                        <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                        </svg>
                        <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(education)} data-toggle="collapse" data-target="#navbarTogglerDemo03">education</span>
                    </Tree>
                    <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                    </svg>
                    <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(experience)} data-toggle="collapse" data-target="#navbarTogglerDemo03">Experience</span>

                    <Tree name="Portfolio" defaultOpen>
                        <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                        </svg>
                        <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(portfolio)} data-toggle="collapse" data-target="#navbarTogglerDemo03">Projects</span><br />
                        {/* <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                        </svg>
                        <span className="sc-dkzCjb gAa-DMJ " onClick={() => console.log("hi3")}>Illustrations</span> */}
                    </Tree>
                    <svg viewBox="64 -65 897 897" style={{ width: "1em", height: "1em", marginRight: "10px", cursor: "pointer", verticalAlign: "middle", opacity: "0.3" }}><g><path d="M717.5 589.5q-10.5 10.5 -25.5 10.5t-26
                     -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155
                    q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"></path></g>
                    </svg>
                    <span className="sc-dkzCjb gAa-DMJ hover-btn" onClick={() => scrollToAbout(contactme)} data-toggle="collapse" data-target="#navbarTogglerDemo03">Contact_Me</span>
                </Tree>
            </Container>
        )
    }

    return (
        <>
            <div className='w-100 portfolio-container' id={nightMode ? "night" : "light"}  >

                <div className="container" >
                    {Navbar()}
                    <div className="row">
                        <div className="col-2 py-4 d-none d-md-block tree-element glow-on-hover">
                            {TreeSelector()}
                        </div>
                        <div className="col-12 col-md-10 wrapper p-0 p-md-2 px-1 px-md-4">
                            <div ref={hello}><Hello /></div>
                            <div ref={about}><About /></div>
                            <div ref={skills}><Skills /></div>
                            <div ref={education}><Education /></div>
                            <div ref={experience}><Experience /></div>
                            <div ref={portfolio}><Portfolio/></div>
                            <div ref={contactme}><Contactform/></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage;
