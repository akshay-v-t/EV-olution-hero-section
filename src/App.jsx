import React, { useEffect, useState } from 'react'
import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';

const App = () => {
  let heroData = [
    {text1: "Explore", text2: "what excites you"}
{text1: "Embrace", text2: "your true desires"}
{text1: "Unleash", text2: "your inner passion"}
  ]

  const [heroCount, setHeroCount] =useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})

    },3000)
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
    <Navbar />
    <Hero 
    setPlayStatus={setPlayStatus}
    heroData={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
    />
    </div>
  )
}

export default App