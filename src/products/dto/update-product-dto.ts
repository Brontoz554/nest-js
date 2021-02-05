import { IsNumber, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  @IsOptional()
  readonly title: string;

  @IsNumber()
  @IsOptional()
  readonly price: number;
}
