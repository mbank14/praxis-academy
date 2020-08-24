let dictionary = new Map();
dictionary.set("eat", "makan");
dictionary.set("learn", "belajar");
dictionary.set("make", "buat");
console.log(dictionary);
// dictionary.delete("eat");
// console.log(dictionary);

const iterator1 = dictionary[Symbol.iterator]();
for (let item of iterator1) {
    console.log(item.toString());
}


function trans() {
    let searchWord = document.querySelector("#searchWord").value;
    console.log(searchWord);

    let find = dictionary.has(searchWord);
    if (find) {
        alert(`${searchWord} dalam bahasa indonesia adalah ${dictionary.get(searchWord)}`);
    } else {
        alert("word is not find");
    }
}

function addWord() {
    let en = document.querySelector("#en").value;
    let id = document.querySelector("#id").value;

    dictionary.set(en, id);
    console.log(dictionary);
}

function delWord() {
    let searchWord = document.querySelector("#delWord").value;
    let word = dictionary.has(searchWord);
    if (word) {
        dictionary.delete(searchWord);
        alert(searchWord + " is delete");
        console.log(dictionary);
    } else {
        alert("word is not find");
    }
    let text = ""
    for (let dict of dictionary.entries()) {
        text += `${dict[0]} : ${dict[1]}` + " <br/>";
        console.log(`${dict[0]} : ${dict[1]}`);
    }
    document.querySelector("#allWord").innerHTML = text;
}