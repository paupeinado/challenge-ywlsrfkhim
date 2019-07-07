import { ContainsTextPipe } from './contains-text.pipe';

describe('ContainsTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ContainsTextPipe();
    expect(pipe).toBeTruthy();
  });
});
