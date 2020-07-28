
export default class User {

    constructor({id, firstName, lastName, birthDate, gender, job, biography, isActive} =
                    {id: null, firstName: null, lastName: null, birthDate: null, gender: null, job: null, biography: null, isActive: null}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.job = job;
        this.biography = biography;
        this.isActive = isActive;
    }

    static fromServerUser(serverUser) {
        let user = new User();
        user.id = serverUser.id;
        user.firstName = serverUser.first_name;
        user.lastName = serverUser.last_name;
        user.birthDate = serverUser.birth_date;
        user.gender = serverUser.gender;
        user.job = serverUser.job;
        user.biography = serverUser.biography;
        user.isActive = serverUser.is_active;
        return user;
    }

    toServerUser() {
        return {
            id: this.id,
            first_name: this.firstName,
            last_name: this.lastName,
            birth_date: this.birthDate,
            gender: this.gender,
            job: this.job,
            biography: this.biography,
            is_active: this.isActive,
        };
    }
}
