import React, { useState } from 'react'
import LinkElement from './LinkElement'
import '../styles/links.css'
export default function LinkList({list, setList}) {


  
    return (
        <div className = 'linksList'>
       
        {list && list.map(item => <LinkElement setList = {setList} list = {list}  data = {item}/>)}
       
        </div>
    )
}
