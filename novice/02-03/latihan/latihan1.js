//functional programming
//
//

let book = [
    {
        name: 'JavaScript',
        pages: 450
    },
    {
        name: 'GoLang',
        pages: 390
    },
    {
        name: 'Rust',
        pages: 490
    }
]

//................CONTOH IMPERATIVE PATTERN..............
// for (let i = 0; i < book.length; i++) {
//     book[i].lastRead = new Date();
    
// }


//................ CONTOH DECLARATIVE PATTERN...............

book.map((buku) => {
    buku.lastReadBy = new Date();
    return buku;
});

console.log(book)