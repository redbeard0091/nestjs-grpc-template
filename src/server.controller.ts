import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

interface Request {
  msg: string;
}

interface Response {
  msg: string;
}

@Controller()
export class ServerController {
  constructor() {
    console.log('Starting service ....');
  }
  @GrpcMethod('ServerService', 'Compute')
  compute(data: Request): Response {
    const result = { msg: `${data.msg} world!` };

    console.log(
      `Got message: ${JSON.stringify(data)} -> will return: ${JSON.stringify(
        result,
      )}`,
    );

    return result;
  }
}
