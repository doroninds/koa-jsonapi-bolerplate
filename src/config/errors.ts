interface IAPIError {
  message: string
  status: number
  code: string
}
export class APIError extends Error {
  private readonly originMessage: IAPIError['message']
  private readonly status: IAPIError['status']
  private readonly code: IAPIError['code']

  constructor({ message, status, code }: IAPIError) {
    super(message)
    this.originMessage = message
    this.status = status
    this.code = code
  }
}

export class NotAuthorizedError extends APIError {
  constructor() {
    super({ message: 'Not authorized', status: 401, code: 'E_001' })
  }
}

export class InvalidTokenError extends APIError {
    constructor() {
        super({ message: 'Invalid token', status: 401, code: 'E_002' })
    }
}
