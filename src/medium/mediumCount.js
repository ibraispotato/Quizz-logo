import React, { createContext, useState, useContext, useEffect } from "react";
import phtot1 from "./medium/1.webp"
import phtot2 from "./medium/2.webp"
import phtot3 from "./medium/3.webp"
import phtot4 from "./medium/4.webp"
import phtot5 from "./medium/5.webp"
import phtot6 from "./medium/6.webp"
import phtot7 from "./medium/7.webp"
import phtot8 from "./medium/8.webp"
import phtot9 from "./medium/9.webp"
import phtot10 from "./medium/10.webp"
import phtot11 from "./medium/11.webp"
import phtot12 from "./medium/12.webp"
import phtot13 from "./medium/13.webp"
import phtot14 from "./medium/14.webp"
import phtot15 from "./medium/15.webp"
import phtot16 from "./medium/16.webp"
import phtot17 from "./medium/17.webp"
import phtot18 from "./medium/18.webp"
import phtot19 from "./medium/19.webp"
import phtot20 from "./medium/20.webp"
import phtot21 from "./medium/21.webp"
import phtot22 from "./medium/22.webp"
import phtot23 from "./medium/23.webp"
import phtot24 from "./medium/24.webp"
import phtot25 from "./medium/25.webp"
import phtot26 from "./medium/26.webp"
import phtot27 from "./medium/27.webp"
import phtot28 from "./medium/28.webp"
import phtot29 from "./medium/29.webp"
import phtot30 from "./medium/30.webp"
import phtot31 from "./medium/31.webp"
import phtot32 from "./medium/32.webp"
import phtot33 from "./medium/33.webp"
import phtot34 from "./medium/34.webp"
import phtot35 from "./medium/35.webp"
import phtot36 from "./medium/36.webp"
import phtot37 from "./medium/37.webp"
import phtot38 from "./medium/38.webp"
import phtot39 from "./medium/39.webp"
import phtot40 from "./medium/40.webp"
import phtot41 from "./medium/41.webp"
import phtot42 from "./medium/42.webp"
import phtot43 from "./medium/43.webp"
import phtot44 from "./medium/44.webp"
import phtot45 from "./medium/45.webp"
import phtot46 from "./medium/46.webp"






export const Contexts = createContext()

export const MediumCont = ({ children }) => {
    const [text, SetTexter] = useState("")
    const [adds,setAdds] = useState([])
    const [notAdds,setNotAdd] = useState([])

    
    const [DataMedium, setDataMedium] = useState([
        {
            id: 1,
            photo: phtot1,
            name: "Dove",
            hint:"it's a shampoo"
        },
        {
            id: 2,
            photo: phtot2,
            name: "Knorr",
            hint: "begins with Kn"
        },
        {
            id: 3,
            photo: phtot3,
            name: "Marvel Comics",
            hint:"it's a Comics"
        },
        {
            id: 4,
            photo: phtot4,
            name: "Tesla",
            hint:"it's a Car"
        },
        {
            id: 5,
            photo: phtot5,
            name: "Nerf",
            hint:"Ne f"
        },{
            id: 6,
            photo: phtot6,
            name: "Air Jordan",
            hint:"use your Brain Man"
        },{
            id: 7,
            photo: phtot7,
            name: "Rolex",
            hint:"it's expensive"
        },{
            id: 8,
            photo: phtot8,
            name: "Gatorade",
            hint:"it's an Energy drinks"
        },
        {
            id: 9,
            photo: phtot9,
            name: "Converse",
            hint:"shoe"
        },
        {
            id: 10,
            photo: phtot10,
            name: "New York Times",
            hint:"N** Y*** T***"
        },{
            id: 11,
            photo: phtot11,
            name: "Qantas",
            hint:"Qan***"
        },{
            id: 12,
            photo: phtot12,
            name: "Bacardi",
            hint:"Bac****"
        },{
            id: 13,
            photo: phtot13,
            name: "Virgin",
            hint:"Vir***"
        },{
            id: 14,
            photo: phtot14,
            name: "Lacoste",
            hint:"it's a Perfume"
        },{
            id: 15,
            photo: phtot15,
            name: "IBM",
            hint:"I*M"
        },{
            id: 16,
            photo: phtot16,
            name: "Xerox",
            hint:"Xer**"
        },{
            id: 17,
            photo: phtot17,
            name: "Best Buy",
            hint:"Be** B**"
        },{
            id: 18,
            photo: phtot18,
            name: "Under Armour",
            hint:"Un*** Ar****"
        },{
            id: 19,
            photo: phtot19,
            name: "Reeses",
            hint: "Ree***"
        },{
            id: 20,
            photo: phtot20,
            name: "Motorola",
            hint:"Moto****"
        },{
            id: 21,
            photo: phtot21,
            name: "Michelin",
            hint:"Mich****"
        },{
            id: 22,
            photo: phtot22,
            name: "Atari",
            hint:"Ata**"
        },{
            id: 23,
            photo: phtot23,
            name: "Burger King",
            hint:"Burger ****"
        },{
            id: 24,
            photo: phtot24,
            name: "Monster",
            hint:"M*n**t**"
        },{
            id: 25,
            photo: phtot25,
            name: "NBC",
            hint:"N*C"
        },{
            id: 26,
            photo: phtot26,
            name: "Blockbuster",
            hint:"Block******"
        },{
            id: 27,
            photo: phtot27,
            name: "Bic",
            hint:"B**"
        },{
            id: 28,
            photo: phtot28,
            name: "Coca-Cola",
            hint:"it's an Soda"
        },{
            id: 29,
            photo: phtot29,
            name: "Dolby",
            hint:"Do***"
        },{
            id: 30,
            photo: phtot30,
            name: "Beats by Dre",
            hint:"HeadPhones"
        },{
            id: 31,
            photo: phtot31,
            name: "Lufthansa",
            hint:"Lufth****"
        },
        {
            id: 32,
            photo: phtot32,
            name: "Nickelodeon",
            hint:"easy one btw"
        },{
            id: 33,
            photo: phtot33,
            name: "T-Mobile",
            hint:"T-Mo****"
        },{
            id: 34,
            photo: phtot34,
            name: "Tiffany",
            hint:"chucky's wife name"
        },{
            id: 35,
            photo: phtot35,
            name: "New Balance",
            hint:"N** Bal****"
        },{
            id: 36,
            photo: phtot36,
            name: "Dreamworks",
            hint:"Dream*****"
        },{
            id: 37,
            photo: phtot37,
            name: "Ray-Ban",
            hint:"Ray-B**"
        },{
            id: 38,
            photo: phtot38,
            name: "Firefox",
            hint:"F***f**"
        },
        {
            id: 39,
            photo: phtot39,
            name: "Hoover",
            hint:"Hoo***"
        },{
            id: 40,
            photo: phtot40,
            name: "Monopoly",
            hint:"Mono****"
        },{
            id: 41,
            photo: phtot41,
            name: "AT&T",
            hint:"A*&*"
        },{
            id: 42,
            photo: phtot42,
            name: "John Deere",
            hint:"J*** D****"
        },{
            id: 43,
            photo: phtot43,
            name: "Taco Bell",
            hint:"T*** B***"
        },{
            id: 44,
            photo: phtot44,
            name: "Wendys",
            hint:"We****"
        },{
            id: 45,
            photo: phtot45,
            name: "Red Bull",
            hint:"it's an Energy drinks"
        },{
            id: 46,
            photo: phtot46,
            name: "Nintendo",
            hint:"Nin*****"
        }
     
    ])
    return (
        <Contexts.Provider value={{DataMedium, setDataMedium,text,SetTexter,adds,setAdds,notAdds,setNotAdd}}>
            {children}
        </Contexts.Provider>
        
    )
}

export const useStateContexter =() => useContext(Contexts)