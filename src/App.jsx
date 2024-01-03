import React from 'react'

function App() {
  function colorRandom(){
    return  Math.floor(Math.random()*256)
  }
  function setColor(){
    let parent = document.querySelector("body")
    parent.style.backgroundColor = 'rgba('+colorRandom()+' , '+colorRandom()+', '+colorRandom()+')'; 
    document.querySelector('span').innerText= getComputedStyle(parent).backgroundColor;
  }
  return (
    <div>
      <div className='w-full h-[100vh] flex flex-col justify-center items-center'>
          <div className='rounded-xl  bg-black text-white text-[40px] px-5 py-2'>
              <p>Background-color : <span>?, ?, ?</span></p>
          </div>
          <button onClick={setColor} className='text-[25px] font-bold border border-black rounded-xl px-5 py-1 mt-10'>click me</button>
      </div>
    </div>
  )
}

export default App