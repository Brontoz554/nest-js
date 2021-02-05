import {
  IsNotEmpty, IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  @IsOptional()
  readonly firstName: string;

  @IsString()
  @IsOptional()
  readonly secondName: string;

  @IsString()
  @IsOptional()
  @MinLength(11)
  @MaxLength(12)
  readonly phone: string;

  @IsString()
  @IsOptional()
  readonly password: string;
}
