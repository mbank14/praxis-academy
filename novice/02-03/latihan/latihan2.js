let meetup = [
    {
        name: 'ES',
        isActive: true,
        member: 209
    },
    {
        name: 'Vue',
        isActive:true,
        member: 389
    },
    {
        name: 'ExpressJS',
        isActive: false,
        member: 489
    }
]
//contoh imperative
let activeMeetUp = [];
for (let i = 0; i < meetup.length; i++) {
    let m = meetup[i];
    if(m.isActive){
        activeMeetUp.push(m);
    }
    
}

console.log(activeMeetUp);
console.log('=================== contoh deklaratif================')

let activeMeetUpFP = [];
activeMeetUpFP = (meetup.filter((m) => {
    return m.isActive;
}));

console.log(activeMeetUpFP)