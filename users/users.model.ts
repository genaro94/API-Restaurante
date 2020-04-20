const users = [
  { name: "Genaro Figueiredo", email: "genaro@gmail.com" },
  { name: "Geomar Figueiredo", email: "geomar@gmail.com" },
  { name: "Jorge Figueiredo", email: "jorge@gmail.com" },
];

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }
}
