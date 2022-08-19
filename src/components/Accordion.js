import React ,{useState} from "react";



const Accordion =({items})=>{
    const [activeindex,setactiveindex]=useState(null)
    const ontitleclick=(index)=>{
        setactiveindex(index)

    };

    const renderitems= items.map((item,index) =>{
        const active= index===activeindex? 'active' : ''
        return (
            <React.Fragment key={item.title}>
                <div onClick={()=>{ontitleclick(index)}} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return(
        <div className="ui styled accordion">{renderitems}

        </div>
    )
}


export default Accordion;