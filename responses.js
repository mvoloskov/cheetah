module.exports = {
  ok: data => ({
    ok: true,
    ...data
  }),
  err: err => ({
    ok: false,
    err
  })
}
