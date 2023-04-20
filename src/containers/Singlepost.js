import React from "react";
import { useParams } from "react-router-dom";

const Singlepost = (params) => {

    let blogRecord = JSON.parse(localStorage.getItem("blogData"));

    let blogid = useParams();

    if(window.location.pathname == "/singlepost/" + blogid.index){
        document.getElementById("body").style.height = "auto";
    }


    console.log(blogid.index);

    return(
        <>
            {
                blogRecord.map((value, i) => {
                    if(blogid.index == i){
                        return(
                            <div className="single-posts">
                                <img className="single-post-image" src={value.BlogImage} alt={value.BlogHeding + " Image"} />
                                <h2 className="single-post-heading">{value.BlogHeding}</h2>
                                <p className="single-post-discription">{value.BlogDiscription}</p>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default Singlepost;