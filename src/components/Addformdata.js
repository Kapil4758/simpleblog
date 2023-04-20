import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/js/custom.js";

const Addformdata = () => {

    let blogdata = [];

    let navigate = useNavigate("");

    let [newdata, setNewData] = useState();

    let [headingerror, setHeadingError] = useState("");
    let [discriptionerror, setDiscriptionError] = useState("");
    let [imageerror, setImageError] = useState("");

    if (window.location.pathname == "/") {
        document.getElementById("body").style.height = "100vh";
    }

    useEffect(() => {

        let blogRecord = JSON.parse(localStorage.getItem("blogData"));

        setNewData(blogRecord);

    }, [newdata]);

    blogdata = newdata;

    const blogData = (e) => {

        e.preventDefault();

        if (e.target.blogheading.value == "" && e.target.blogdiscription.value == "" && e.target.blogimage.value == "") {

            setHeadingError("*Please fill in this field, this field is required");
            setDiscriptionError("*Please fill in this field, this field is required");
            setImageError("*Please fill in this field, this field is required");

        }
        else if (e.target.blogheading.value == "" || e.target.blogdiscription.value == "" || e.target.blogimage.value == "") {

            if (e.target.blogheading.value == "") {
                setHeadingError("*Please fill in this field, this field is required");
            }
            else {
                setHeadingError("");
            }

            if (e.target.blogdiscription.value == "") {
                setDiscriptionError("*Please fill in this field, this field is required");
            }
            else {
                setDiscriptionError("");
            }

            if (e.target.blogimage.value == "") {
                setImageError("*Please fill in this field, this field is required");
            }
            else {
                setImageError("");
            }

        }
        else {

            let blogHeading = e.target.blogheading.value;
            let blogDiscription = e.target.blogdiscription.value;
            let blogImage = e.target.blogimage.value;

            let blogDetail = {
                BlogHeding: blogHeading,
                BlogDiscription: blogDiscription,
                BlogImage: blogImage
            }

            blogdata.push(blogDetail);

            localStorage.setItem("blogData", JSON.stringify(blogdata));

            navigate("/blogs");
        }

    }

    return (
        <div className="form-section">
            <form onSubmit={(e) => blogData(e)}>
                <h1>Insert Blog Detail</h1>
                <div className="heading-and-error">
                    <input type="text" name="blogheading" className="blog-heading" placeholder="Enter Blog Name" />
                    <span className="blog-heading-error">{headingerror}</span>
                </div>
                <div className="discription-and-error">
                    <textarea name="blogdiscription" className="blog-discription" placeholder="Enter Blog Discription" cols="30" rows="5"></textarea>
                    <span className="blog-discription-error">{discriptionerror}</span>
                </div>
                <div className="image-and-error">
                    <input type="url" name="blogimage" className="blog-image" placeholder="Enter Blog Image Link" />
                    <span className="blog-image-error">{imageerror}</span>
                </div>
                <input type="submit" className="blog-submit" placeholder="Submit" />
                {/* https://i.natgeofe.com/n/8a4cd21e-3906-4c9d-8838-b13ef85f4b6e/tpc18-outdoor-gallery-1002418-12000351_01_square.jpg */}
            </form>
        </div>
    )
}

export default Addformdata;