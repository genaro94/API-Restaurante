"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: "Genaro Figueiredo", email: "genaro@gmail.com" },
    { name: "Geomar Figueiredo", email: "geomar@gmail.com" },
    { name: "Jorge Figueiredo", email: "jorge@gmail.com" },
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.User = User;
