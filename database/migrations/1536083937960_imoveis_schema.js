'use strict'

const Schema = use('Schema')

class ImoveisSchema extends Schema {
  up () {
    this.table('imoveis', (table) => {
      // alter table
    })
  }

  down () {
    this.table('imoveis', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ImoveisSchema
