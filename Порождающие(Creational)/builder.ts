class UserBuilder {
    user;

    setMainInfo(name: string, surname: string) {
        this.user.name = name;
        this.user.surname = surname;

        return this
    }

    setAdressInfo(street: string, flatNumber: string) {
        this.user.street = street;
        this.user.flatNumber = flatNumber;

        return this
    }

    getUser() {
        const user = this.user;
        this.user = {}
        return user;
    }
}