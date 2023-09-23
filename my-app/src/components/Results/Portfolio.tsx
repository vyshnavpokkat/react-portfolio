import React from 'react'
import cnet from '../../assets/projects/cnet.png'
import profile from '../../assets/projects/profile.png'
import tictactoe from '../../assets/projects/tictactoe.png'
import winds from '../../assets/projects/winds.png'
import weather from '../../assets/projects/weather.png'
import sketch1 from '../../assets/drawings/sketch_01.png'
import sketch2 from '../../assets/drawings/sketch_02.png'
import sketch3 from '../../assets/drawings/sketch_03.png'
import sketch4 from '../../assets/drawings/sketch_04.png'
import sketch5 from '../../assets/drawings/sketch_05.png'
import sketch6 from '../../assets/drawings/sketch_06.png'
import sketch7 from '../../assets/drawings/sketch_07.png'
import sketchbook from '../../assets/projects/sketchbook.jpeg'
import web from '../../assets/projects/web.jpg'


export default function Portfolio() {
    return (
        <div>
            <div className='screen-height-100'>
                <p className='h2 text-center text-md-start'>Portfolio...</p>
                <hr />
                <div className='d-flex flex-column flex-md-row py-5'>
                    <div className='col-12 col-md-4 portfolio-bd-fix d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${winds})` }}>
                    <a href="https://windsapp.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                            <p className='project-text mb-0'>WindsApp.com</p>
                    </a>
                    </div>
                    
                    <div className='col-12 col-md-4 portfolio-bd-fix d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${web})` }} data-toggle="modal" data-target="#exampleModalCenter2">
                        <p className='project-text mb-0'>Small_Projects</p>
                    </div>
                    <div className='col-12 col-md-4 portfolio-bd-fix d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${sketchbook})` }} data-toggle="modal" data-target="#exampleModalCenter">
                        <p className='project-text mb-0'>Illustrations</p>
                    </div>
                </div>
            </div>
            <div className="modal fade dark-modal" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content dark-modal-content">
                        <div className="modal-body gallery-body">
                            <img src={sketch1} alt="sketch" />
                            <img src={sketch2} alt="sketch" />
                            <img src={sketch3} alt="sketch" />
                            <img src={sketch4} alt="sketch" />
                            <img src={sketch5} alt="sketch" />
                            <img src={sketch6} alt="sketch" />
                            <img src={sketch7} alt="sketch" />
                        </div>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
            <div className="modal fade dark-modal" id="exampleModalCenter2" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content dark-modal-content ">
                        <div className="modal-body gallery-body">
                            <a href="https://tictaktoe-game.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                <span className="px-2 cursor-pointer">
                                    <img src={tictactoe} alt='scroll-img' />
                                    {/* <p className="card-text py-3 text-center" style={{ color: "red" }}>Tic_Tac_Toe</p> */}
                                </span>
                            </a>
                            <a href="https://city-weather-mzhe.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                <span className="px-2 cursor-pointer">
                                    <img src={weather} alt='scroll-img' />
                                    {/* <p className="card-text py-3 text-center" style={{ color: "red" }}>Weather_App</p> */}
                                </span>
                            </a>
                            <a href="https://cnet-clone.onrender.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                <span className="px-2 cursor-pointer">
                                    <img src={cnet} alt='scroll-img' />
                                    {/* <p className="card-text py-3" style={{ color: "red" }}>CNET_Clone</p> */}
                                </span>
                            </a>
                            <a href="https://kaleidoscopic-alpaca-18a319.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                <span className="px-2 cursor-pointer">
                                    <img src={profile} alt='scroll-img' />
                                    {/* <p className="card-text py-3 text-center" style={{ color: "red" }}>Profile_view</p> */}
                                </span>
                            </a>
                        </div>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
