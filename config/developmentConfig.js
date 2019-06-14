module.exports = {
  port: 3000,
  data_base: {
    user:process.env.user || 'root',
    password:process.env.password || 'password'
  }
}
