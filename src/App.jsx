import React from 'react'
import './App.css'

function App() {

  const bgChanger = (color) => {
    const bg = document.querySelector('.bgchanger');
    bg.style.background = color;
  }

  const randomBg = () => {
    const bg = document.querySelector('.bgchanger');
    bg.style.background = randomColor();
  }

  const randomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
    }
    console.log(color);
    return color;
  }

  return (
    <>
      <div className='bgchanger h-screen p-10 flex flex-col justify-between items-center'>
        <h1 className='text-5xl text-center font-extrabold text-rose-400'>Background Changer App</h1>
        <div className='flex justify-center items-center'>
          <button onClick={() => bgChanger("white")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>White </button>
          <button onClick={() => bgChanger("#0F4C81")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Classic Blue</button>
          <button onClick={() => bgChanger("#6B5B95")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Ultra Violet</button>
          <button onClick={() => bgChanger("#6667AB")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Veri Peri</button>
          <button onClick={() => bgChanger("#BB2649")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Viva Magenta</button>
          <button onClick={() => bgChanger("#00A170")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Mint</button>
          <button onClick={() => bgChanger("#4B5335")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Chive</button>
          <button onClick={() => bgChanger("#282D3C")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Navy Blazer</button>
          <button onClick={() => bgChanger("black")} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Black</button>
          <button onClick={randomBg} className='bg-rose-300 text-md text-black p-2 font-semibold m-2 rounded-md'>Random Color</button>
        </div>
      </div>
    </>
  )
}

export default App
