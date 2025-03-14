import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly _appService: AppService) {}

  @Get()
  getHello(): string {
    return this._appService.getHello()
  }
}
