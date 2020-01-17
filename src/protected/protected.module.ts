import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ProtectedController } from './protected.controller';

@Module({
    imports: [AuthModule],
    controllers: [ProtectedController],
})
export class ProtectedModule { }
