import { ILogger } from "./ILogger"

interface UserData {
  name: string
}

export class AuthService {
  async getUserData(): Promise<UserData> {
    return { name: "Big Lebowski" }
  }
}

export class User {
  constructor(private data: UserData) {}
  name = () => this.data.name
}

export class PaymentService {
  constructor(private readonly _logger: ILogger, private readonly user: User) {}
  sendMoney() {
    this._logger.info("Info")
    return true
  }
}
