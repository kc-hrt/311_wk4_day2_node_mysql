const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: 'fotohut.org',
        user: 'fotohut_ACA',
        password: '8DIS4ccZNgtHpxnd72SJ',
        database: 'fotohut_ACAdb'
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;