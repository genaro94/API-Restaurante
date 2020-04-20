const users = [
  { id: "1", name: "Genaro Figueiredo", email: "genaro@gmail.com" },
  { id: "2", name: "Geomar Figueiredo", email: "geomar@gmail.com" },
  { id: "3", name: "Jorge Figueiredo", email: "jorge@gmail.com" },
];

export class User {
  static findAll(): Promise<any[]> {
    return Promise.resolve(users);
  }

  static findById(id: string): Promise<any> {
    return new Promise((resolve) => {
      const filtered = users.filter((user) => user.id === id);
      let user = undefined;
      if (filtered.length > 0) {
        user = filtered[0];
      }
      resolve(user);
    });
  }
}
