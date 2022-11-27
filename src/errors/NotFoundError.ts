export class NotFoundError extends Error {
  public readonly statusCode: number

  constructor() {
    super('Resource not found')
    this.statusCode = 404
  }
}
