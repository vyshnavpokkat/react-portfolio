import React from 'react'
import winds_logo from '../../assets/winds_logo.svg'
import maitexa_logo from '../../assets/maitexa.png'

export default function Experience() {
    return (
        <>
            <div>
                <p className='h2 text-center text-md-start'>experience</p>
                <hr style={{ color: "#ff0000" }} />
                <div className='row py-5'>
                    <div className='col-12 col-md-6 d-flex flex-column  justify-content-between align-items-center' style={{ borderRight: "1px solid red" ,minHeight:"230px" }}>
                        <img src={winds_logo} alt='winds_logo ' style={{ width: "20%" }} className='logo-animation' />
                        <ul className="custom-list w-100">
                            <p className='h4 pt-5 pb-2' style={{ color: "#ffc107" }}>Winds E Pvt Ltd</p>
                            <li className='m-0'>April 2023 - present</li>
                            <li className='m-0'>Front end Developer Intern</li>
                            <li><a href='https://windsapp.com/'>https://windsapp.com/</a></li>
                        </ul>
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column justify-content-between align-items-center'>
                        <img src={maitexa_logo} alt='winds_logo' style={{ width: "50%" }} className='logo-animation' />
                        <ul className="custom-list w-100">
                            <p className='h4 pt-5 pb-2' style={{ color: "#ffc107" }}>Maitexa  Info Solutions LLP</p>
                            <li className='m-0'>September 2022 - february 2023</li>
                            <li className='m-0'>Front end Developer Trainee</li>
                            <li><a href='https://maitexa.com/'>https://maitexa.com/</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}
