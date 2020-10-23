/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import type { QueryResponseModel } from '../../../src/types'
import BaseModel from './BaseModel'
import Comment from './Comment'
import TagEmbed from './TagEmbed'
import User from './User'

export default class Post extends BaseModel<true, true>() {
  public id?: number
  public someId?: string
  public text?: string
  public user?: QueryResponseModel<User>
  public relationships?: {
    tags: { data: QueryResponseModel<TagEmbed>[] }
  }

  comments() {
    return this.hasMany(Comment)
  }

  relations() {
    return {
      user: User,
      'relationships.tags': TagEmbed
    }
  }
}