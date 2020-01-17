import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    providers: [AuthGuard],
})
export class AuthModule { }
