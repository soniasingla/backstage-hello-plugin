import { helloPluginPlugin } from './plugin';

describe('hello-plugin', () => {
  it('should export plugin', () => {
    expect(helloPluginPlugin).toBeDefined();
  });
});
