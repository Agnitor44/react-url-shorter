import React, { useEffect, useRef, useState } from 'react'
import Info from './Info'
import LinkList from './LinkList'
import shortUrl from 'node-url-shortener';
import '../styles/panel.css'
export default function Panel() {
    const [list, setList] = useState([])
    const [err, setErr] = useState(null)
    
    const inpRef = useRef()

  

    const linkMaker = async(e) => {
        e.preventDefault()
        setErr(null)
    
        if(!inpRef.current.value)
        {
          
            return setErr('Please add a link')
        }
       
      await  shortUrl.short(inpRef.current.value, function(err, url){
            if(err) {
               
                return setErr("Link does not work")
            } 
            setList([...list, {
                orginal: inpRef.current.value,
                new: url,
                copy: false
            }])
});

   
    }
    return (
        <section className="panel">
            <div className="panelWrapper">
            <div className="formZone">
                <form onSubmit = {linkMaker} action="">
                    <input style = {err ? {border: "3px solid hsl(0, 87%, 67%)"}:{border: "none"}}  ref = {inpRef} type="text" placeholder = 'Shorten a link here...' />
                    <button  > Shorten It!</button>
                    {
                    err && <h4 className = 'linkErr'>{err}</h4>
                    }
                   
                </form>
            </div>
            <LinkList setList = {setList} list = {list}/>
            <Info/>
            </div>
         
        </section>
    )
}
