
function App() {
  return (
    <section  className="bg-black  h-screen" >

      <form className="text-white flex justify-between pr-10" >

          <div className="flex w-1/2 items-start gap-3 ml-10 flex-col p-5 " >
        <input className="px-5 w-full py-2 border-2 rounded" 
          type="text"
          placeholder="Enter Task Heading "
        

          />

          <input className="px-5 w-full py-2 border-2 rounded" 
           type="texArea" 
           placeholder="Write Details"
           />
         
           <button  className="text-black bg-white w-full py-2 px-5 rounded" > click me </button>

       
           </div>
           <img className="h-59" src="https://static.vecteezy.com/system/resources/thumbnails/073/034/096/small/cute-lavender-spiral-notebook-with-happy-face-illustration-free-png.png" alt="" />
      </form>
    </section>
  )
}

export default App