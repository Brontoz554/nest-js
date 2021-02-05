import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class cartDto {
  @IsNotEmpty()
  readonly user: string;

  @IsNotEmpty()
  readonly product: string;

  @IsNumber()
  @Min(1)
  @Max(10)
  @IsOptional()
  count: number;
}
