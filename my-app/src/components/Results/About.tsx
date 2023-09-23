import React from 'react'

export default function About() {
    return (
        <>
            <div className='row'>
                <p className='h3 text-center text-md-start'>about_me</p>
                <hr style={{ color: "red" }}/>
                <div className='col-12 col-md-4 d-flex justify-content-center align-items-center py-5'>
                    <svg height="110" viewBox="0 0 1792 1792" width="130" xmlns="http://www.w3.org/2000/svg" className='about-logo logo-animation'>
                        <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" />
                    </svg>
                </div>
                <div className='py-0 py-md-3 col-12 col-md-8'>
                    <ul className="custom-list">
                        <li>Highly motivated and passionate Front-End Developer with 1-year internship experience in React JS.</li>
                        <li>Dedicated and fast learner, proficient in front-end technologies, eager to contribute to innovative projects.</li>
                        <li>Experienced in collaborating with cross-functional teams and optimizing application performance.</li>
                        <li style={{ color: "red" }} >Creative problem solver, committed to delivering visually appealing and user-friendly web applications efficiently.</li>
                        <li>Skilled in code development, data handling, and incorporating feedback to create robust software solutions.</li>
                    </ul>
                </div>
                

            </div>
        </>
    )
}
