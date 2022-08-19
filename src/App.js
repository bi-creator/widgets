import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/search";

const items=[
    {
        title:"title1",
        content:"content1"
    },
    {
        title:"title2",
        content:"content2"
    },
    {
        title:"title3",
        content:"content4"
    },
    {
        title:"title4",
        content:"content4"
    }
]

export default ()=>{
    return (
        <div>
            
                <Search/>
        </div>
    )

}