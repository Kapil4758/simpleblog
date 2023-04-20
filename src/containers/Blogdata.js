import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css"

const Blogdata = () => {

    let blogRecord = JSON.parse(localStorage.getItem("blogData"));

    let [search, setSearch] = useState("");

    let [record, setRecord] = useState(blogRecord);

    let [symbol, setSymbol] = useState("");

    if(window.location.pathname == "/blogs"){
        document.getElementById("body").style.height = "auto";
    }

    const sortData = (e) => {

        if(symbol == "" || symbol == "v"){
            let data = blogRecord.sort((a,b) => {
                return b.BlogHeding.localeCompare(a.BlogHeding);
            });

            setSymbol("^");
            setRecord(data);
        }
        else{
            let data = blogRecord.sort((a,b) => {
                return a.BlogHeding.localeCompare(b.BlogHeding);
            });

            setSymbol("v");
            setRecord(data);
        }

    }

    return(
        <>
            <div className="filter">
                <input type="text" className="filter-input" name="searching" onChange={(e) => setSearch(e.target.value)} />
                <button className="sort-btn" onClick={(e) => sortData(e)}>{symbol ? "Sort Data " + symbol : "Sort Data"}</button>
            </div>
            <div className="posts">
            {
                record?record
                .filter((value,index) => {
                    if(search == ""){
                        return value;
                    }
                    else if(value.BlogHeding.includes(search)){
                        return value;
                    }
                })
                .map((value, index) => {

                    let word = value.BlogDiscription;
                    let postDiscription = word.substring(0, 150);

                    return(
                        <div className={"blog-post post-"+index}>
                            <div className="post-bg-image">
                                <img src={value.BlogImage} className="post-image" alt={value.BlogHeding + " Image"} />
                            </div>
                            <h2 className="post-heading">{value.BlogHeding}</h2>
                            <p className="post-discription">{postDiscription + "..."}</p>
                            <Link to={"/singlepost/" + index}><button className="post-read-more">Read More</button></Link>
                        </div>
                    )        
                }):"No record found"
            }
            </div>
        </>
    )
}

export default Blogdata;