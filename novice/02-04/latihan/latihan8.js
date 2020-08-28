let janjian = new Promise((resolve, reject) => {
    //resolve('berhasil');
    reject(new Error('gagal'));
})

janjian
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)})
