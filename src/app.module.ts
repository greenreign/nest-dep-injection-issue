import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProtectedModule } from './protected/protected.module';

@Module({
  imports: [AuthModule, UserModule, ProtectedModule],
})
export class AppModule { }
