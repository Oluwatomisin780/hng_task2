import { Body, Controller, Get, Post } from '@nestjs/common';

import { OperationType, DATA_TYPE } from './data';
@Controller()
export class AppController {
  @Get()
  getInput() {
    return {
      slackName: 'oluwatomisin',
      age: '19',
      backend: true,
      bio: "Hi,i'm oluwatomisin!...i love to play football..i'm 19yrs old",
    };
  }

  @Post()
  arthemeticOperation(@Body() input: OperationType): {
    slackUsername: string;
    result: number;
    operation_type: DATA_TYPE;
  } {
    const { operation_type, x, y } = input;
    if (operation_type === DATA_TYPE.ADDITION) {
      return {
        slackUsername: 'oluwatomisin',
        result: x + y,
        operation_type,
      };
    } else if (operation_type === DATA_TYPE.MULTIPLICATION) {
      return {
        slackUsername: 'oluwatomisin',
        result: x * y,
        operation_type,
      };
    } else if (operation_type === DATA_TYPE.SUBTRACTION) {
      return {
        slackUsername: 'oluwatomisin',
        result: x - y,
        operation_type,
      };
    }
  }
}
