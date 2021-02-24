import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';
import { SignInDTO } from '../../dtos/signIn.dto';

export class SignInRequestDTO implements SignInDTO {
  @ApiProperty()
  @IsDefined({ message: '$property não pode ser nulo' })
  @IsString({ message: '$property deve ser uma string válida' })
  email: string;
  @ApiProperty()
  @IsDefined({ message: '$property não pode ser nulo' })
  @IsString({ message: '$property deve ser uma string válida' })
  password: string;
}
