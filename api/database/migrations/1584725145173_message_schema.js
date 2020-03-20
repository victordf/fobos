'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MessageSchema extends Schema {
  up () {
    this.create('messages', (table) => {
      table.increments()
      table.string('content', 300).notNull()
      table.timestamp('deleted_at')
      table.timestamps()
    })
  }

  down () {
    this.drop('messages')
  }
}

module.exports = MessageSchema
