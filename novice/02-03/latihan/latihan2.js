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

let activeMeetUp = [];
for (let i = 0; i < meetup.length; i++) {
    let m = meetup[i];
    if(m.isActive){
        activeMeetUp.push(m);
    }
    
}

console.log