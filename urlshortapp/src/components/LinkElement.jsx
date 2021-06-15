import React, { useEffect, useState } from 'react'

export default function LinkElement({data, setList, list}) {
  
  
    const handleCopy = () => {
        const id = list.findIndex(item => item.new === data.new)
        const resetArr = list.map(item => item.copy = false)
        setList(resetArr)
        console.log(id)
       
        const replica = [...list]
        replica[id].copy = true
       setList(replica)

      
        var r = document.createRange();
        r.selectNode(document.getElementById(data.new));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(r);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    }
 


    return (
        <div className="linkBox">
                 <div className="linkBox">
                <h4>{data.orginal}</h4>
                <div className="rightLink">
                    <a id = {data.new} href = {data.new} target = "__blank">{data.new}</a>
                    <button style = {data.copy ? {backgroundColor: 'hsl(260, 8%, 14%)'} : {backgroundColor: 'hsl(180, 66%, 49%)'}} onClick = {handleCopy}>{data.copy ? "Copied!" : "Copy" }</button>
                </div>
            </div>
    </div>
    )
}
