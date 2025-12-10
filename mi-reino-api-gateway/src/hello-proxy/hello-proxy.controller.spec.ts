import { Test, TestingModule } from '@nestjs/testing';
import { HelloProxyController } from './hello-proxy.controller';

describe('HelloProxyController', () => {
  let controller: HelloProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloProxyController],
    }).compile();

    controller = module.get<HelloProxyController>(HelloProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
