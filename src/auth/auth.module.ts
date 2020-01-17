import { Module } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [UserModule],
    providers: [AuthGuard],
    exports: [AuthGuard],
})
export class AuthModule { }
