module.exports = class UserDto {
    name;
    email;
    id;
    isActivated;
    surname;
    patronymic;
    tel;
    dateOfBirth;

    constructor(model) {
        this.name = model.name,
        this.email = model.email
        this.id = model._id
        this.isActivated = model.isActivated
        this.surname = model.surname
        this.patronymic = model.patronymic
        this.tel = model.tel
        this.dateOfBirth = model.dateOfBirth
    }

} 