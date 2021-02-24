import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateShortcutRequestDTO {
  @ApiProperty()
  @IsString({ message: '$property deve ser uma string válida' })
  baseLink?: string;
}
