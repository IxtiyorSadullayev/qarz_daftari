class User {
    constructor(id, user_name, name, fam, phone, password,role){
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.fam = fam;
        this.phone = phone;
        this.password = password;
        this.role = role;
    }

    toString(){
        return `${this.name}  ${this.fam}`;
    }
}