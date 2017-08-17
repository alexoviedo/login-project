users = [{
  userName: "Alex",
  password: "Alex"
}, {
  userName: "user",
  password: "password123"
}];

function signIn(a, b, c) {
  let d = users.find
  (e => {
    return b === e.userName && c === e.password &&
    (e.validated = !0,
      a.session.authenticated = !0, !0)
  });
  return d
}

module.exports = {
  users: users,
  authenticate: signIn
};
