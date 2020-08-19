//LATIHAN THROWWWWW


function UserExeption(msg){
    this.message = msg;
    this.name = 'UserExeption';
}

UserExeption.prototype.toString = function(){
    return `${this.name}: "${this.msg}"`;
}

throw new UserExeption('Value to high');