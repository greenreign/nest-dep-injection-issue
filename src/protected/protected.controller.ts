import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('protected')
@UseGuards(AuthGuard)
export class ProtectedController { }
