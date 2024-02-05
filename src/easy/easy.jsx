      import React, { useEffect, useState,useRef } from 'react'
      import  "./easy.css"
      import { useStateContexts } from './easycont'
      import { Link } from 'react-router-dom';

      const Easy = () => {
        const { setDataEasy, DataEasy, SetTexts, text, adds, setAdds,notAdds,setNotAdd } = useStateContexts()
        let random = Math.floor(Math.random() * DataEasy.length)
        const [timer, setTimer] = useState(40);
      const [img,setimg]= useState(""||DataEasy[random]?.photo)
      const [imgs,setimgs]= useState(random)
      const timerId = useRef(null);
        
      
        const Click = (e,value) => {
          
        let random = Math.floor(Math.random() * DataEasy.length)
          const url = DataEasy[random]?.photo
          setimgs(random)
          setimg(url) 
          SetTexts("")
          const down = text
          const down2 = DataEasy[imgs]?.name
            console.log(down2)
          down.toLowerCase() === down2?.toLowerCase() ?
            setAdds([...adds, { name: down2, id: DataEasy[imgs]?.id }]) || setTimer(prev=>prev+3)
            
            :
            setNotAdd([...notAdds,  { name: down2, id: DataEasy[imgs]?.id }]) || setTimer(prev=>prev-3)
            
        }
        const clickEnter = (event) => {
          if (event.key === 'Enter') {
            let random = Math.floor(Math.random() * DataEasy.length)
            const url = DataEasy[random]?.photo
            
            setimgs(random)
            setimg(url) 
            SetTexts("")
            const down = text
            const down2 = DataEasy[imgs]?.name
            down.toLowerCase() === down2?.toLowerCase() ?
              setAdds([...adds, { name: down2, id: DataEasy[imgs]?.id }]) || setTimer(prev=>prev+5)
              
              :
              setNotAdd([...notAdds,  { name: down2, id: DataEasy[imgs]?.id }]) || setTimer(prev=>prev-5)
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
                      <input type='text' loading="lazy" onKeyDown={text === "" ? console.log("") :clickEnter} className='inputs' onChange={(e) => SetTexts(e.target.value)} value={text} />
                    </div>
                    <div>
                      <button className='nextBtn' onClick={text === "" ? console.log("") : Click} >Next</button>
                    </div>
                  </div>
                </div>
              </>
            }
          </div>
        )
      }

      export default Easy