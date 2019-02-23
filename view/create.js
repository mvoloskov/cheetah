module.exports = {
  ok: () => ({
    ok: true
  }),
  err: err => ({
    ok: false,
    err
  })
}
