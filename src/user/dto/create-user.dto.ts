import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  readonly firstName: string;

  @IsNotEmpty()
  @IsString()
  readonly secondName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(12)
  readonly phone: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
