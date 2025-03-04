import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { envSchema } from './env.validation';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {
    envSchema.parse(this.configService.get('PORT'));
  }
  get port() {
    return this.configService.get<number>('PORT', 3000);
  }
  get databaseUrl() {
    return this.configService.get<string>('DATABASE_URL');
  }
}