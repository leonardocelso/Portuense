// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'mysql.codefour.com.br',
      user : 'codefo06_gabi',
      password : 'Code123!@#',
      database : 'codefo06_portuense'
    },
    // connection: {
    //   host : 'localhost',
    //   user : 'root',
    //   password : '@dmin',
    //   database : 'codefo06_portuense'
    // },
    migrations : {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    },
    seeds : {
      directory: './src/database/seeds',
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
