import { Module } from '@nestjs/common';
import { DevModule } from './dev/dev.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MailService } from './mail/mail.service';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    UserModule,
    DevModule,
    TagModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
