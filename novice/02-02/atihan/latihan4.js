class User {
    constructor(name) {
      this.name = name;
    }
  
    ucapkanHalo() {
      console.log("halo " + this.name);
    }  
}
  
let user = new User("bboo");
user.ucapkanHalo();