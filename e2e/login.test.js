describe('Login Flow', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  it('should login successfully', async () => {
    await expect(element(by.id('login-email-input'))).toBeVisible();

    await element(by.id('login-email-input')).typeText('eve.holt@reqres.in');
    await element(by.id('login-password-input')).typeText('cityslicka');

    await element(by.id('login-submit-button')).tap();

    await expect(element(by.id('friends-screen'))).toBeVisible();
  });
});
