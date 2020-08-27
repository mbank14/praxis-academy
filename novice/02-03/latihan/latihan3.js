// Function Chaining

let meetUps = [
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


let jumlahFPChain = meetUps.filter((m) => {
    return m.isActive;
})
.map((m) => {
    return m.member- (0.1*m.member);
})
.reduce((acc, m) => {
    return acc+ m;
},0);

console.log(jumlahFPChain);
