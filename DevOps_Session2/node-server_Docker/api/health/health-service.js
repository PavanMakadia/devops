

const _health = new Promise((resolve, reject) => {
    resolve("API Is Healthy !");
})

const _home = new Promise((resolve, reject) => {
    resolve("Welcome Home !");
})

module.exports = {
    health: _health,
    home: _home
}