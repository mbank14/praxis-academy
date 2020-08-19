//contoh sederhana while
function checkData(){
    if (document.form1.treeChar.value.length == 3){
        return true;
    }else{
        alert(
            'Enter exactly three characters. ' +
            `${document.form1.treeChar.value} is not valid`
        );
        return false;
    }
}
