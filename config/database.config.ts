import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfig {
  constructor(private configService: ConfigService) {}

  get type(): string {
    return this.configService.get<string>('DB_TYPE');
  }
  get host(): string {
    return this.configService.get<string>('DB_HOST');
  }
  get port(): number {
    return this.configService.get<number>('DB_PORT');
  }
  get username(): string {
    return this.configService.get<string>('DB_USERNAME');
  }
  get password(): string {
    return this.configService.get<string>('DB_PASSWORD');
  }
  get database(): string {
    return this.configService.get<string>('DB_NAME');
  }
}
