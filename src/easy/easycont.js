import React, { createContext, useState, useContext, useEffect } from "react";
import PhotoOne from "./easy/1.webp"
import PhotoTwo from "./easy/2.webp"
import PhotoThere from "./easy/3.webp"
import PhotoFour from "./easy/4.webp"
import PhotoFive from "./easy/5.webp"
import PhotoSix from "./easy/6.webp"
import PhotoSeven from "./easy/7.webp"
import PhotoEight from "./easy/8.webp"
import PhtotNine from "./easy/9.webp"
import PhtotTen from "./easy/10.webp"
import PhtotELeven from "./easy/11.webp"
import PhotoTwelve from "./easy/12.webp"
import PhotoThreteen from "./easy/13.webp"
import Photofourteen from "./easy/14.webp"
import Photofiteen from "./easy/15.webp"
import PhotoSixten from "./easy/16.webp"
import PhotoSivteen from "./easy/17.webp"
import Photoeighteen from "./easy/18.webp"
import Photoninteen from "./easy/19.webp"
import PhotoTwenty from "./easy/20.webp"
import Photo21 from "./easy/21.webp"
import Photo22 from "./easy/22.webp"
import Photo23 from "./easy/23.webp"
import Photo24 from "./easy/24.webp"
import Photo25 from "./easy/25.webp"
import Photo26 from "./easy/26.webp"
import Photo27 from "./easy/27.webp"
import Photo28 from "./easy/28.webp"
import Photo29 from "./easy/29.webp"
import Photo30 from "./easy/30.webp"
import Photo31 from "./easy/31.webp"
import Photo32 from "./easy/32.webp"
import Photo33 from "./easy/33.webp"
import Photo34 from "./easy/34.webp"
import Photo35 from "./easy/35.webp"
import Photo36 from "./easy/36.webp"
import Photo37 from "./easy/37.webp"
import Photo38 from "./easy/38.webp"
import Photo39 from "./easy/39.webp"
import Photo40 from "./easy/40.webp"
import Photo41 from "./easy/41.webp"
import Photo42 from "./easy/42.webp"
import Photo43 from "./easy/43.webp"
import Photo44 from "./easy/44.webp"
import Photo45 from "./easy/45.webp"
import Photo46 from "./easy/46.webp"
import Photo47 from "./easy/47.webp"
import Photo48 from "./easy/48.webp"
import Photo49 from "./easy/49.webp"
import Photo50 from "./easy/50.webp"
import Photo51 from "./easy/51.webp"
import Photo52 from "./easy/52.webp"
import Photo53 from "./easy/53.webp"




export const Contexts = createContext()

export const EasyCont = ({ children }) => {
    const [text, SetTexts] = useState("")
    const [adds,setAdds] = useState([])
    const [notAdds,setNotAdd] = useState([])

    
    const [DataEasy, setDataEasy] = useState([
        {
            id: 1,
            photo: PhotoOne,
            name: "Netflix",
            finish:false
        },
        {
            id: 2,
            photo: PhotoTwo,
            name: "Audi",
            finish:false
        },
        {
            id: 3,
            photo: PhotoThere,
            name: "Adidas",
            finish:false
        },
        {
            id: 4,
            photo: PhotoFour,
            name: "McDonald",
            finish:false
        },
        {
            id: 5,
            photo: PhotoFive,
            name: "Dunkin Donuts",
            finish:false
        },{
            id: 6,
            photo: PhotoSix,
            name: "Pepsi",
            finish:false
        },{
            id: 7,
            photo: PhotoSeven,
            name: "Wikipedia",
            finish:false
        },{
            id: 8,
            photo: PhotoEight,
            name: "Doritos",
            finish:false
        },
        {
            id: 9,
            photo: PhtotNine,
            name: "Mountain Dew",
            finish:false
        },
        {
            id: 10,
            photo: PhtotTen,
            name: "Twitter",
            finish:false
        },{
            id: 11,
            photo: PhtotELeven,
            name: "Tide",
            finish:false
        },{
            id: 12,
            photo: PhotoTwelve,
            name: "Puma",
            finish:false
        },{
            id: 13,
            photo: PhotoThreteen,
            name: "IKEA",
            finish:false
        },{
            id: 14,
            photo: Photofourteen,
            name: "Target",
            finish:false
        },{
            id: 15,
            photo: Photofiteen,
            name: "Pringles",
            finish:false
        },{
            id: 16,
            photo: PhotoSixten,
            name: "Starbucks",
            finish:false
        },{
            id: 17,
            photo: PhotoSivteen,
            name: "Visa",
            finish:false
        },{
            id: 18,
            photo: Photoeighteen,
            name: "LG",
            finish:false
        },{
            id: 19,
            photo: Photoninteen,
            name: "Toyota",
            finish:false
        },{
            id: 20,
            photo: PhotoTwenty,
            name: "Pizza Hut",
            finish:false
        },{
            id: 21,
            photo: Photo21,
            name: "Nike",
            finish:false
        },{
            id: 22,
            photo: Photo22,
            name: "Internet Explorer",
            finish:false
        },{
            id: 23,
            photo: Photo23,
            name: "iTunes",
            finish:false
        },{
            id: 24,
            photo: Photo24,
            name: "Spotify",
            finish:false
        },{
            id: 25,
            photo: Photo25,
            name: "Dell",
            finish:false
        },{
            id: 26,
            photo: Photo26,
            name: "Gucci",
            finish:false
        },{
            id: 27,
            photo: Photo27,
            name: "Paypal",
            finish:false
        },{
            id: 28,
            photo: Photo28,
            name: "PlayStation",
            finish:false
        },{
            id: 29,
            photo: Photo29,
            name: "Instagram",
            finish:false
        },{
            id: 30,
            photo: Photo30,
            name: "Android",
            finish:false
        },{
            id: 31,
            photo: Photo31,
            name: "X-Box",
            finish:false
        },
        {
            id: 32,
            photo: Photo32,
            name: "Amazon",
            finish:false
        },{
            id: 33,
            photo: Photo33,
            name: "Facebook",
            finish:false
        },{
            id: 34,
            photo: Photo34,
            name: "Skype",
            finish:false
        },{
            id: 35,
            photo: Photo35,
            name: "BBC",
            finish:false
        },{
            id: 36,
            photo: Photo36,
            name: "Lipton",
            finish:false
        },{
            id: 37,
            photo: Photo37,
            name: "WhatsApp",
            finish:false
        },{
            id: 38,
            photo: Photo38,
            name: "Lays",
            finish:false
        },
        {
            id: 39,
            photo: Photo39,
            name: "Subway",
            finish:false
        },{
            id: 40,
            photo: Photo40,
            name: "YouTube",
            finish:false
        },{
            id: 41,
            photo: Photo41,
            name: "Yahoo",
            finish:false
        },{
            id: 42,
            photo: Photo42,
            name: "Baskin Robbins",
            finish:false
        },{
            id: 43,
            photo: Photo43,
            name: "Safari",
            finish:false
        },{
            id: 44,
            photo: Photo44,
            name: "Mastercard",
            finish:false
        },{
            id: 45,
            photo: Photo45,
            name: "Google",
            finish:false
        },{
            id: 46,
            photo: Photo46,
            name: "Gmail",
            finish:false
        },{
            id: 47,
            photo: Photo47,
            name: "Lego",
            finish:false
        },{
            id: 48,
            photo: Photo48,
            name: "Tiktok",
            finish:false
        },{
            id: 49,
            photo: Photo49,
            name: "Snickers",
            finish:false
        },{
            id: 50,
            photo: Photo50,
            name: "Microsoft",
            finish:false
        },{
            id: 51,
            photo: Photo51,
            name: "KFC",
            finish:false
        },{
            id: 52,
            photo: Photo52,
            name: "Dominos",
            finish:false
        },{
            id: 53,
            photo: Photo53,
            name: "Shell",
            finish:false
        },
    ])
    return (
        <Contexts.Provider value={{DataEasy, setDataEasy,text,SetTexts,adds,setAdds,notAdds,setNotAdd}}>
            {children}
        </Contexts.Provider>
        
    )
}

export const useStateContexts =() => useContext(Contexts)