import React from "react";
import profile from "../../assets/vyshnav_profile.jpeg";

export default function Hello() {

    const handleDownload = () => {
        // using Java Script method to get PDF file
        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Vyshnav_cv.pdf';
                alink.click();
            })
        })
    };


    return (
        <>
            <div className="container screen-height-100">
                <div className="row">
                    <div className="col-md m-1 d-flex flex-column justify-content-center align-items-center">
                        <p className="h1">vyshnav_p</p>
                        <p className="h5">front_end_developer</p>
                    </div>
                    <div className="col-md  m-1 d-flex flex-column justify-content-center align-items-center zoom2">
                        <img
                            src={profile}
                            alt="profile"
                            style={{ width: "200px", borderRadius: "50%" }}
                        />
                    </div>
                </div>

                <div className="w-100 pt-5 pb-1 text-center">
                    <p className="d-block">vyshnavpkt22@gmail.com <span style={{ color: "red" }} className="d-none d-md-inline">|</span> +91_9645402521</p>
                </div>
                <div className="col-12 d-flex align-items-start justify-content-center">



                    {/* <span className='px-2'>Links_To: </span> */}
                    <a href="https://www.linkedin.com/in/vyshnav-pokkat-0a9525246/" target="_blank" rel="noopener noreferrer" style={{color:"inherit"}}>
                        <span className="px-2 cursor-pointer">
                            <i className="fa fa-linkedin-square" style={{ fontSize: "36px"}}></i>
                        </span>
                    </a>
                    <a href="https://github.com/vyshnavpokkat?tab=repositories" target="_blank" rel="noopener noreferrer" style={{color:"inherit"}}>
                        <span className="px-2 cursor-pointer">
                            <i className="fa fa-github-square" style={{ fontSize: "36px" }}></i>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/vyshnavpokkat/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer" style={{color:"inherit"}}>
                        <span className="px-2 cursor-pointer">
                            <i className="fa fa-instagram" style={{ fontSize: "36px" }}></i>
                        </span>
                    </a>
                </div>
                <hr style={{ color: "red" }}/>
                <div className="col-12 col-md-11 text-start mx-auto pt-3 pb-1">
                    <p>
                        In pursuit of professional advancement and continuous growth, I am
                        seeking an environment that not only fosters my expertise in
                        JavaScript and software program development but also provides a vast
                        array of educational opportunities. My passion lies in exploring
                        cutting-edge technologies and pioneering novel ideas, making me an
                        ideal fit for an organization that values innovation and embraces
                        forward-thinking approaches in the software development industry. I
                        am eager to contribute my skills and thrive in a space where
                        creativity and learning intersect, propelling both my career and the
                        organization to new heights.
                    </p>
                </div>
                <p style={{ color: "red" }} className="text-center err-text h5 pe-auto cursor-pointer pb-5 zoom2" onClick={handleDownload}>Download_CV..</p>
                {/* <button onClick={handleDownload} className=" zoom2 mx-auto  w-100" style={{backgroundColor:"transparent",border:"none",color:"red"}}>Download CV...</button> */}
            </div>
        </>
    );
}
