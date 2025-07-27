// DTO para el modelo User
class UserDTO {
  // Constructor de la clase UserDTO
  constructor(user) {
    this.id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
  }
}

module.exports = UserDTO;
