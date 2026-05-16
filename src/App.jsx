import { useState } from "react"

function App() {
 const [name, setname] = useState("")
 const [dtl, setdtl] = useState("")

  const Bus=(e)=>{

    e.preventDefault()
   console.log("task Heading is - ",name);
   console.log("ditaisl is - ",dtl);
   
   setname("")
   setdtl("")
   
  }

  return (

    <section  className="bg-black  h-screen lg:flex" >


      <form onSubmit={(e)=>{
        Bus(e)
        
      }}

       className="text-white flex   flex-col gap-5  p-5 lg:w-1/2  " >


          

        <input className="px-5 w-full py-2 border-2 rounded focus:outline-none" 
          type="text"
          placeholder="Enter Task Heading "
          value={name}
        onChange={(e)=>{
          setname(e.target.value)
        }}
        

          />

          <textarea className="px-5 w-full h-40  resize-none py-2 border-2 rounded focus:outline-none" 
           type="text" 
           placeholder="Write Details"
           value={dtl}
           onChange={(e)=>{
            setdtl(e.target.value)
           }}
           />
         
           <button  className="text-black bg-white w-full py-2 px-5 rounded" > click me </button>

       
          
          
      </form>
      <div className="lg:w-1/2 bg-red-400 p-5">
       <div className="w-40 h-50 bg-amber-50 " >  </div></div>
     
    </section>
    
  )
}

export default App