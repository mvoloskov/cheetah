module.exports = {
  ok: token => ({
    ok: true,
    data: token
  }),
  err: err => ({
    ok: false,
    err
  })
}
