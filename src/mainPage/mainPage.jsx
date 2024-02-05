import React,{useState} from 'react'
import "./mainPage.css"

import { useStateContext } from '../context/context';
import { useStateContexts } from '../easy/easycont';
import { useStateContexter } from '../medium/mediumCount';
import { useStateContextHard } from '../hard/hardCount'



import { Link } from 'react-router-dom';
const MainPage = () => {
  const [change, SetChange] = useState(false);
  const [changeDiff, SetChangeDiff] = useState(true);
  const [changeplay, SetChangePlay] = useState(false);
  // const [Text, SetText] = useState("");
    const {SetText,text,} =useStateContext()
    const {SetTexts} =useStateContexts()
  const { SetTexter } = useStateContexter()
  const { SetTexters } = useStateContextHard()
  
  SetTexter("")
  SetTexters("")
    SetTexts("")
  const clickDiff = () => {
    SetChangeDiff(prev=>!prev)
  }
  const SetChangePlays = () => {
    SetChangePlay(prev=>!prev)
  }
  const clickme = () => {
    SetChange(prev=>!prev)
  }
  // console.log(Text)
  return (
    <div className='hero'>
      <div onClick={clickme} className={`${change & changeDiff || changeplay?"box change": "box"}`}>
        
        
            <div className='btns change'>
            
          {change && changeDiff || changeplay ?
            <Link to={text==="" ? "/easy" : `/${text}`}>
            <button className='Mainbtn play'>play</button>
            </Link>
            

            : changeDiff ? <h1 className='theH1'>Quiz logo</h1> :
              <>
                <div className='allBtns'>
                <div onClick={() => SetText("easy")}>
                <button onClick={SetChangePlays} className='btn easy'>Easy</button>
                </div>
                
                <div onClick={()=>SetText("medium")}>
              <button onClick={SetChangePlays} className='btn medium'>Medium</button>
                </div>

                <div onClick={() => SetText("hard")}>
                  <button onClick={SetChangePlays} className='btn hard'>Hard</button>
                  </div>
                  </div>
              </>
          }
              {change&&changeDiff || changeplay? <button className='Mainbtn' onClick={changeDiff?clickDiff: SetChangePlays}>difficulty</button> : ""}
          
            
          
        </div>
        
        
      </div>
    </div>
  )
}

export default MainPage
