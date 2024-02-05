import React, { useEffect, useState,useRef } from 'react'
import  "../easy/easy.css"
import { useStateContexter } from './mediumCount'
import { Link } from 'react-router-dom';

const Meduim = () => {
  const { DataMedium, setDataMedium,text,SetTexter,adds,setAdds,notAdds,setNotAdd } = useStateContexter()
  let random = Math.floor(Math.random() * DataMedium.length)
  const [timer, setTimer] = useState(60);
const [img,setimg]= useState(""||DataMedium[random]?.photo)
const [imgs,setimgs]= useState(random)
  const timerId = useRef(null);

  const [hento,setHento]= useState(""||DataMedium[random]?.hint)
  const [hentos,setHentos]= useState("hint?")
  const Skip = (e, value) => {
    let random = Math.floor(Math.random() * DataMedium.length)
    const url = DataMedium[random]?.photo
    // const hoho = DataMedium[imgs]?.hint

    setimgs(random)
    setimg(url) 
    SetTexter("")
    const down = text
    const down2 = DataMedium[imgs]?.name
    // setHento(hoho)
    setHentos("hint?")
    const hoho = DataMedium[random]?.hint
    setHento(hoho)
  }

  const Click = (e,value) => {
    
  let random = Math.floor(Math.random() * DataMedium.length)
    const url = DataMedium[random]?.photo
    // const hoho = DataMedium[imgs]?.hint

    setimgs(random)
    setimg(url) 
    SetTexter("")
    const down = text
    const down2 = DataMedium[imgs]?.name
    // setHento(hoho)
    setHentos("hint?")
    const hoho = DataMedium[random]?.hint
    setHento(hoho)
    down.toLowerCase() === down2?.toLowerCase() ?
      setAdds([...adds, { name: down2, id: DataMedium[imgs]?.id }]) || setTimer(prev=>prev+5)
      
      :
      setNotAdd([...notAdds,  { name: down2, id: DataMedium[imgs]?.id }]) || setTimer(prev=>prev-5)
      
  }
  const hints = () => {
    setTimer(prev=>prev-3)
    setHentos(hento)
}

  const clickEnter = (event) => {
    if (event.key === 'Enter') {
      let random = Math.floor(Math.random() * DataMedium.length)
      const url = DataMedium[random]?.photo
    setimgs(random)
    
      setHentos("hint?")
      const hoho = DataMedium[random]?.hint
      setHento(hoho)
      setimg(url) 
      SetTexter("")
      const down = text
      const down2 = DataMedium[imgs]?.name
      down.toLowerCase() === down2?.toLowerCase() ?
        setAdds([...adds, { name: down2, id: DataMedium[imgs]?.id }]) || setTimer(prev=>prev+5)
        
        :
        setNotAdd([...notAdds,  { name: down2, id: DataMedium[imgs]?.id }]) || setTimer(prev=>prev-5)
    }
  }
  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimer(prev => prev-1)
    }, 1000)
    return ()=> clearInterval(timerId.current)
  }, [text])
  
  const  reso = () => {
    setAdds([])
    setNotAdd([])

  }

  return (
    
    <div className='all'>
      {timer <= 0 || adds.length===25?
        <div className='scores'>
          <div className='sc'>
            <h1>Your Score:</h1>
          <p className='lens green'>{adds.length}</p>
          </div>
          <div className='sc'>
              <h1>You didn't score:</h1>
            <p className='lens red'>{notAdds.length}</p>
            
          </div>
          <div className='btnreset'>
            <Link to={"/Quizz-logo"}>
            <button onClick={reso} className='nextBtn'>Reset</button>
            </Link>
          </div>
      
        </div>
        
        :
        <>
          <div className='sec'>
          <h1>{timer}</h1>
        </div><div className='down'>
            <div className='logoText'>
              <h1>Guess the logo</h1>
            </div>
            <div>
              <img alt='' src={img} />
            </div>
            <div className='textAndBtn'>
              <div>
                <input type='text' loading="lazy" onKeyDown={text === "" ? console.log("lol") :clickEnter} className='inputs' onChange={(e) => SetTexter(e.target.value)} value={text} />
              </div>
              <div className='btners'>
                <button className='nextBtn' onClick={text === "" ? console.log("lol") : Click} >Next</button>
                <button className='nextBtn' onClick={Skip} >Skip</button>
              </div>
             
            </div>
            <div className='hints'>
              <p onClick={hints}>{hentos}</p>
            </div>
           
          </div>
        </>
      }
    </div>
  )
}

export default Meduim