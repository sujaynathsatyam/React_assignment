import react from 'react';
const Mycard = (props) => {
   
    console.log(props)
   
    return(
        <>
            
        
        <div >
        <tr >
            <th>{props.ProductName}</th>
           
        </tr>
        </div>
        </>
        
    )
    
}

export default Mycard;