export class User {
    #avatar; 
    #email; 
    #first_name;
    #id
    #last_name;
    constructor(id) {
        this.#id = id;
    }
    get avatar() {
        return this.#avatar;
    }
    set avatar(avatar) {
        this.#avatar = avatar;
    }
    get email() {
        return this.#email;
    }
    set email(email) {
        this.#email = email;
    }
    get first_name() {
        return this.#first_name;
    }
    set first_name(first_name) {
        this.#first_name = first_name;
    }
    get id() {
        return this.#id;
    }
    set id(id) {
        this.#id = id;
    }
    get last_name() {
        return this.#last_name;
    }
    set last_name(last_name) {
        this.#last_name = last_name;
    }
    

    static cabecera = ['#', 'First Name', 'Last Name', 'Email'];
}