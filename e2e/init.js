const adapter = require('detox/runners/jest/adapter');

beforeAll(async () => {
  await adapter.beforeAll();
}, 120000);

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
});
