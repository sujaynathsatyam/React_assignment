
import react ,{ useState } from 'react';
import { render } from 'react-dom';
import "./Cmp.css"
function Productinput({handleLogout})
{
    const [productInput,setproductInput]=useState(
        {
            ProductName:'',
            Price:'',
            Quantity:''
    
        });
       
    
    
        
        
        const [cardList,setCardList]=useState(
           []
            

        )
        const [c,setC]=useState(0);
        const [count, setCount] = useState(0);
        
        const [records,setRecords]=useState([]);
        const[img,setImage] = useState({
            file:null
        });
        var handleImage=(event)=> {
            console.log("handle image");
            var reader = new FileReader();
            reader.onload = () => {
                if(reader.readyState){
                    setImage({file:reader.result})
                }
            }
            reader.readAsDataURL(event.target.files[0])
          }
        const inputEvent=(event)=>
        {
            const name=event.target.name;
            const value=event.target.value;
            console.log(name,value);
            setproductInput({ ...productInput,[name]:value});
            
        }
        const handleSubmit = (event)=>
        {
            event.preventDefault();

            const newRecord={ ...productInput,id:new Date().getTime.toString()}
            
            setRecords([...records,newRecord]);
           
            console.log(records);
        };
        const Add = (event)=>{
           
            if(count<productInput.Quantity){
                setCount(count+1)
            }
            else{
                alert("cannot exceed the limit");
            }
        }
        // decrement qty value by 1
        const Sub = (event)=>{
            if(count>0){
            
                setCount(count-1)
            }
            else{
                alert("less");
            }
        }
        const AddCard=(e,c)=>
        {
            const i=e.target.value;
            const newRecord={ ...records[i],id:new Date().getTime.toString()}
            setCardList([...cardList,newRecord])
            setC(count)
            console.log(c);
        }
        const deleted = (name) => {
            console.log(name);
            setCardList(cardList.filter(item => item.ProductName !== name))
        }
       
        
    
    return (
        <>
            <button onClick={handleLogout}>LogOut</button>
            <form onSubmit={handleSubmit}>
                <h1>Product Detail</h1>
                                  
                <div className="form-group ">
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="ProductName"
                    name='ProductName' id="Pname" accept="Image/*" autoComplete="off"
                    value={Productinput.productName}
                    onChange={inputEvent}/>
                </div>
                

                <div className="form-group ">
                    <label>Product Image</label>
                    <input type="File" className="form-control" placeholder="Image"
                        name='Image' id="img"  autoComplete="off"
                        value={productInput.Image}
                        onChange={(event)=>handleImage(event)}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" placeholder="Price"
                        name='Price'  value={productInput.Price} id="price"  autoComplete="off"
                        onChange={inputEvent}/>
                </div>
                <div className="form-group ">
                    <label>Quantity</label>
                    <input type="text" className="form-control" placeholder="Quantity"
                        name='Quantity'  value={productInput.Quantity} id="quantity"  autoComplete="off"
                        onChange={inputEvent}/>
                </div><br></br>
                
                
                <button className="btn btn-primary btn-block">Submit</button>
            </form>

            <div>
            { records.map((inputval,index) =>
                            {
                               return (
                                   <>
                                   
                                   <h1>Product List</h1>
                                   
                                    <div className="card-deck">
                                        <div className="card">
                                            <img className="playerProfilePic_home_tile" src={img.file} />
                                                
                                            <div className="card-body">
                                            
                                              
                                                <h5 className="card-title">Product Name:{inputval.ProductName}</h5>
                                                <p className="card-text">Price:{inputval.Price}</p>
                                                <span><button type="button" onClick={()=>{Add()}} class="btn btn-primary">+</button></span>
                                                <span><button type="button" class="btn ">{count}</button></span>
                                                <span><button type="button" onClick={()=>{Sub()}} class="btn btn-primary">−</button></span>
                                                <br></br>
                                                <button variant="denger" onClick={event=>AddCard(event,c)} value={index}>Add Card</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                                                    
                                  

                                  
                                   
                                   </>
                               
                               );

                           })
                           }
            </div>

            <div>
            <h1>My Card</h1>
            <table className="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Product Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Option</th>
                                            </tr>
                                        </thead>
                { cardList.map((inputval,index) =>
                            {
                               return (
                                   <>
                                   
                                   
                                        <tbody>
                                            <tr>
                                            <th scope="row">{index}</th>
                                            <td>{inputval.ProductName}</td>
                                            <td>{inputval.Price}</td>
                                            <td>{count}</td>
                                            <td>{c*inputval.Price}</td>
                                            <button type="button" className="btn btn-danger"onClick={()=>deleted(inputval.ProductName,)} value={index}>Delete</button>
                                            
                                        
                                           </tr>
                                            
                                        </tbody>
                                        
                                   
                                   </>
                               
                               );
                               

                           })
                           }
                </table>
            </div>
        </>
        
        
    )
}
export default Productinput;