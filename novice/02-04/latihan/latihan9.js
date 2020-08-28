let promiseSatu = () => (new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise pertama')
    }, 1000)
}))
let promiseDua = () => (new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise dua')
    }, 1000)
}))
let promiseTiga = () => (new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise tiga')
    }, 1000)
}))

async function asyncPararel(){
    let a = promiseSatu();
    let b = promiseDua();
    let c = promiseTiga();
    console.log('selese');
}

async function asyncSerial(){
    let a = await promiseSatu();
    let b = await promiseDua();
    let c = await promiseTiga();
    console.log('selese');
}

asyncPararel();
asyncSerial();