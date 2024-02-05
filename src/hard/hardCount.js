import React, { createContext, useState, useContext, useEffect } from "react";
import phtot1 from "./hard/1.webp"
import phtot2 from "./hard/2.webp"
import phtot3 from "./hard/3.webp"
import phtot4 from "./hard/4.webp"
import phtot5 from "./hard/5.webp"
import phtot6 from "./hard/6.webp"
import phtot7 from "./hard/7.webp"
import phtot8 from "./hard/8.webp"
import phtot9 from "./hard/9.webp"
import phtot10 from "./hard/10.webp"
import phtot11 from "./hard/11.webp"
import phtot12 from "./hard/12.webp"
import phtot13 from "./hard/13.webp"
import phtot14 from "./hard/14.webp"
import phtot15 from "./hard/15.webp"
import phtot16 from "./hard/16.webp"
import phtot17 from "./hard/17.webp"
import phtot18 from "./hard/18.webp"
import phtot19 from "./hard/19.webp"
import phtot20 from "./hard/20.webp"
import phtot21 from "./hard/21.webp"
import phtot22 from "./hard/22.webp"
import phtot23 from "./hard/23.webp"
import phtot24 from "./hard/24.webp"
import phtot25 from "./hard/25.webp"
import phtot26 from "./hard/26.webp"
import phtot27 from "./hard/27.webp"
import phtot28 from "./hard/28.webp"
import phtot29 from "./hard/29.webp"
import phtot30 from "./hard/30.webp"
import phtot31 from "./hard/31.webp"
import phtot32 from "./hard/32.webp"
import phtot33 from "./hard/33.webp"
import phtot34 from "./hard/34.webp"
import phtot35 from "./hard/35.webp"
import phtot36 from "./hard/36.webp"
import phtot37 from "./hard/37.webp"






export const Contexts = createContext()

export const HardCont = ({ children }) => {
    const [text, SetTexters] = useState("")
    const [adds,setAdds] = useState([])
    const [notAdds,setNotAdd] = useState([])

    
    const [DataHard, setDataHard] = useState([
        {
            id: 1,
            photo: phtot1,
            name: "Tostitos",
            hint:"Tost***s"
        },
        {
            id: 2,
            photo: phtot2,
            name: "Yamaha",
            hint: "Yam**a"
        },
        {
            id: 3,
            photo: phtot3,
            name: "Nestle",
            hint:"Ne*t*e"
        },
        {
            id: 4,
            photo: phtot4,
            name: "Dole",
            hint:"D*l*"
        },
        {
            id: 5,
            photo: phtot5,
            name: "Umbro",
            hint:"Um**o"
        },{
            id: 6,
            photo: phtot6,
            name: "Chick-fil-A",
            hint:"Ch***-f**-A"
        },{
            id: 7,
            photo: phtot7,
            name: "JetPunk",
            hint:"Jet****"
        },{
            id: 8,
            photo: phtot8,
            name: "Barclays",
            hint:"Bar*l***"
        },
        {
            id: 9,
            photo: phtot9,
            name: "AOL Instant Messenger",
            hint:"A** Ins**** Mess*****"
        },
        {
            id: 10,
            photo: phtot10,
            name: "Kelloggs",
            hint:"Kel***gs"
        },{
            id: 11,
            photo: phtot11,
            name: "Firestone",
            hint:"Fire*****"
        },{
            id: 12,
            photo: phtot12,
            name: "Louis Vuitton",
            hint:"Lo*** Vu****n"
        },{
            id: 13,
            photo: phtot13,
            name: "Gerber",
            hint:"Gerb**"
        },{
            id: 14,
            photo: phtot14,
            name: "Fruit of the Loom",
            hint:"F**** of the ****"
        },{
            id: 15,
            photo: phtot15,
            name: "Skoda Auto",
            hint:"Sk*** A***"
        },{
            id: 16,
            photo: phtot16,
            name: "Klondike",
            hint:"Klo*****"
        },{
            id: 17,
            photo: phtot17,
            name: "Pampers",
            hint:"Pam****"
        },{
            id: 18,
            photo: phtot18,
            name: "American Express",
            hint:"Am****** Ex*****"
        },{
            id: 19,
            photo: phtot19,
            name: "The North Face",
            hint: "T** N**** Face"
        },{
            id: 20,
            photo: phtot20,
            name: "Harley Davidson",
            hint:"Har*** Dav*****"
        },{
            id: 21,
            photo: phtot21,
            name: "ING",
            hint:"I*G"
        },{
            id: 22,
            photo: phtot22,
            name: "Mortons",
            hint:"Mo****s"
        },{
            id: 23,
            photo: phtot23,
            name: "Arm & Hammer",
            hint:"Arm & ******"
        },{
            id: 24,
            photo: phtot24,
            name: "CBS",
            hint:"*BS"
        },{
            id: 25,
            photo: phtot25,
            name: "Levi Strauss",
            hint:"**** Stra***"
        },{
            id: 26,
            photo: phtot26,
            name: "Blockbuster",
            hint:"Block******"
        },{
            id: 27,
            photo: phtot27,
            name: "WalMart",
            hint:"Wal****"
        },{
            id: 28,
            photo: phtot28,
            name: "Goodyear",
            hint:"G**dy***"
        },{
            id: 29,
            photo: phtot29,
            name: "Kodak",
            hint:"Ko*ak"
        },{
            id: 30,
            photo: phtot30,
            name: "BP",
            hint:"*P"
        },{
            id: 31,
            photo: phtot31,
            name: "Versace",
            hint:"Ver****"
        },
        {
            id: 32,
            photo: phtot32,
            name: "Kraft",
            hint:"Kr**t"
        },{
            id: 33,
            photo: phtot33,
            name: "SEAT",
            hint:"S**T"
        },{
            id: 34,
            photo: phtot34,
            name: "Arby's",
            hint:"A***'s"
        },{
            id: 35,
            photo: phtot35,
            name: "Big Boy",
            hint:"B** B**"
        },{
            id: 36,
            photo: phtot36,
            name: "Mr.Clean",
            hint:"Mr.*****"
        },{
            id: 37,
            photo: phtot37,
            name: "American Airlines",
            hint:"A******* Air*****"
        }
     
    ])
    return (
        <Contexts.Provider value={{DataHard, setDataHard,text,SetTexters,adds,setAdds,notAdds,setNotAdd}}>
            {children}
        </Contexts.Provider>
        
    )
}

export const useStateContextHard =() => useContext(Contexts)