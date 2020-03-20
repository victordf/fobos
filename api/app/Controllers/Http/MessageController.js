'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Message = use('App/Models/Message');

/**
 * Resourceful controller for interacting with messages
 */
class MessageController {
  /**
   * Show a list of all messages.
   * GET messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response }) {
    let query = Message.query()
    let data = request.all()

    if (!data.deleted) {
      query.whereNull('deleted_at')
    } else {
      query.whereNotNull('deleted_at')
    }

    let messages = await query.fetch()
    return response.status('200').json({
      'messages': messages
    })
  }

  /**
   * Create/save a new message.
   * POST messages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let data = request.all()

    let message = await Message.create(data)

    return response.status(201).json({
      'message': message
    })
  }

  /**
   * Display a single message.
   * GET messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing message.
   * GET messages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update message details.
   * PUT or PATCH messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a message with id.
   * DELETE messages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = MessageController
