import React, { useState } from 'react';
import '../heading.css';
import Tudulist from './Todolist'

function Content()
{
    const [inputList,setInputList]=useState("");
    const [Items,setItems]=useState([]);
    const eventItem = (event)=>
    {
            setInputList(event.target.value);
    };
    
    const onSubmit = () =>
    {
            setItems((oldItem)=>
            {
                return [...oldItem,inputList]
            })
            setInputList("");
    };
    const deleted = (id) =>
    {
       setItems((oldItem)=>
       {
        return oldItem.filter((arrele,index) =>{
                return index!=id;
        })
    }
       )
    
    };
    return (
            <div >
                <div className="center">
                    <label>Tudu Itmes</label>
                    <br/>
                    <input type="text"  value={inputList} onChange={eventItem}/>
                    <br></br>
                    <button className="submit_button" onClick={onSubmit}>Submit</button>
                    
                </div>
                <div className="tudu_list">
                <table>
                { Items.map((inputval,index) =>
                            {
                               return (
                                   <>
                                   
                                   <Tudulist text={inputval} key={index} id={index} onSelected={deleted}/>
                                  
                                   
                                   </>
                               
                               );

                           })
                           }
                </table>
                           
                        
                </div>
                
            </div>
            
            
    
            );
}

export default Content;