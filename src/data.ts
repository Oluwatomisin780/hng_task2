import { IsEnum, IsNumber } from 'class-validator';

export enum DATA_TYPE {
  ADDITION = 'addition',
  SUBTRACTION = 'subtraction',
  MULTIPLICATION = 'multiplication',
}

//const data: Data = [];

export class OperationType {
  @IsEnum(DATA_TYPE, { each: true })
  operation_type: DATA_TYPE;
  @IsNumber()
  x: number;
  @IsNumber()
  y: number;
}
