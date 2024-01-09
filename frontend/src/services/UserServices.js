import $api from "../http"

export default class UserServices {
    static async changeAccount(id, name, surname, patronymic, dateOfBirth, tel) {
        return $api.post("/change-account", { id, name, surname, patronymic, dateOfBirth, tel });
    }
}