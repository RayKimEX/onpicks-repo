import { ShopsModule } from './shops.module';

describe('ShopsModule', () => {
  let shopsModule: ShopsModule;

  beforeEach(() => {
    shopsModule = new ShopsModule();
  });

  it('should create an instance', () => {
    expect(shopsModule).toBeTruthy();
  });
});
