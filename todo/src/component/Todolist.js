import react from 'react';
const Tudulist = (props) => {
   
    
   
    return(
        <div >
        <tr className="tudu_list">
            <th>{props.te}</th>
            <th><button onClick={() =>
            props.onSelected(props.id)}>Completed</button></th>
        </tr>
    </div>
    )
    
}

export default Tudulist;