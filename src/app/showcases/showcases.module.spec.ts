import { ShowcasesModule } from './showcases.module';

describe('ShowcasesModule', () => {
  let showcasesModule: ShowcasesModule;

  beforeEach(() => {
    showcasesModule = new ShowcasesModule();
  });

  it('should create an instance', () => {
    expect(showcasesModule).toBeTruthy();
  });
});
