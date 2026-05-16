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

    <section  className="bg-black  h-screen lg:flex " >

      <form onSubmit={(e)=>{
        Bus(e)
        
      }}
       className="text-white flex   flex-col gap-5  lg:p-9 lg:w-1/2  " >
        <h1 className="font-bold text-2xl pt-4 lg:p-0">Add Notes</h1>
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
         
           <button  className="text-black bg-white w-full py-2 px-5 rounded font-bold " > Add Note </button>
          
      </form>
      <div className="lg:w-1/2 lg:border-l-2 border-white p-4 lg:p-10 h-full ">

      <h1 className="font-bold text-2xl text-white">Recent Notes</h1>

      <div className="flex gap-4 flex-wrap  h-full overflow-auto "> 
        <div className="w-40 h-52 bg-amber-50 rounded-2xl p-2"></div>
         
       
        
      </div>
      
     
      </div>
    </section>
    
  )
}

export default App