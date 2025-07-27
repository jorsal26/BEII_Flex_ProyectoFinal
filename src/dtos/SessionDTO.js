// DTO para el modelo Session
class SessionDTO {
  // Constructor de la clase SessionDTO
  constructor(session) {
    this.id = session.id;
    this.email = session.email;
    this.name = session.name;
    this.role = session.role;
  }
}
module.exports = SessionDTO;
