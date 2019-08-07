function mash(){
    return "Your home is a "
}

function gethome(){
    const min = 0
    const max = 3
    let randomnum =Math.round(Math.random() * (max - min) + min);
    const houses = ["Mansion","Apartment","Shack","House"]
    console.log(mash() + houses[randomnum]) 
}
console.log(mash())+gethome()
