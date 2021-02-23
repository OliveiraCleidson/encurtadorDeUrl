import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class CreateShortcutRequestDTO {
  @ApiProperty()
  @IsString({ message: '$property deve ser uma string' })
  @IsDefined({ message: '$property não pode ser nulo' })
  url: string;
}
