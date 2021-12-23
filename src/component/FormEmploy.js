import React,{useState} from 'react'

export default function FormEmploy() {
    const [status, setstatus] = useState({
        name:"",
        department:"",
        rating:""
    })
    const [collection, setcollection] = useState([])
    
    const change=(event)=>{
     setstatus({...status,[event.target.name]:event.target.value})   
    }
    const handle=(e)=>{
        e.preventDefault()
        setcollection([...collection,{...status,id:collection.length}])
        

    }
    return (
        <>
        <div className='main'>
            <h1>Employee Feedback Form</h1>
            <form onSubmit={handle}>
                <label name="name" >Name :</label><br/>
                <input type="text" name="name" value={status.name} onChange={change}/>
                <br/><br/>
                    <label name="department" >Department :</label><br />
                <input type="text" name="department" value={status.department} onChange={change}/>

                <br /><br />
                    <label name="department" >Rating :</label><br />
                <input type="number" name="rating" value={status.rating} onChange={change} />
                <br/><br/>
                <button type='submit'>submit</button>
                
            </form>
            </div>
            <div className='boxi'>
                {   collection.map( item =>(
                    <h5 key={item.id}> Name : {item.name} | Department : {item.department} | Rating : {item.rating} </h5>
                ))}
            </div>
        </>
    )
}
