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

    <section  className="bg-black  h-screen" >


      <form onSubmit={(e)=>{
        Bus(e)
        
      }}

       className="text-white flex justify-between pr-10" >


          <div className="flex w-1/2 items-start gap-3 ml-10 flex-col p-5 " >

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

       
           </div>
          
      </form>
    </section>
    
  )
}

export default App