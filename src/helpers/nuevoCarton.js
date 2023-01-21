import db from '../db/bingo.json'

export const nuevoCarton = () =>{
    let result = []
    while(result.length <5){
        let id = Math.floor(Math.random()*15)+1
        if(id>0 && id<=15 && !result.includes(id)) result.push(id)   
    }
    while(result.length<10){
        let id = Math.floor(Math.random()*15)+15
        if(id>15 && id<=30 && !result.includes(id)) result.push(id) 
    }
    while(result.length<15){
        let id = Math.floor(Math.random()*15)+30
        if(id>30 && id<=45 && !result.includes(id)) result.push(id) 
    }
    while(result.length<20){
        let id = Math.floor(Math.random()*15)+45
        if(id>45 && id<=60 && !result.includes(id)) result.push(id) 
    }
    while(result.length<25){
        let id = Math.floor(Math.random()*15)+60
        if(id>60 && id<=75 && !result.includes(id)) result.push(id) 
    }
    result.sort((a,b)=> {return a-b})
    let carton = result.map((el)=> {
        return {id:el, select:false, letter:db.balotas[el].letter}
    })
    return carton
} 