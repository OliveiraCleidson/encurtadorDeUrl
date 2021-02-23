import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString } from 'class-validator';
import { CreateUserDTO } from '../../dtos/createUser.dto';

export class CreateUserRequestDTO implements CreateUserDTO {
  @ApiProperty()
  @IsString({ message: '$property deve ser uma string válida' })
  @IsDefined({ message: '$property não pode ser nulo' })
  name: string;
  @ApiProperty()
  @IsString({ message: '$property deve ser uma string válida' })
  @IsDefined({ message: '$property não pode ser nulo' })
  @IsEmail({}, { message: '$property deve ser um e-mail válido' })
  email: string;
  @ApiProperty()
  @IsString({ message: '$property deve ser uma string válida' })
  @IsDefined({ message: '$property não pode ser nulo' })
  password: string;
}
