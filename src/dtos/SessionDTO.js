// dtos/SessionDTO.js
class SessionDTO {
  constructor(session) {
    this.id = session.id;
    this.email = session.email;
    this.name = session.name;
    this.role = session.role;
  }
}
module.exports = SessionDTO;