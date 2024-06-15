import { test, expect, request } from '@playwright/test';

test.describe('GQL', () => {
  test('Query', async ({ request }) => {
    const query = `query {
        country(code: "US") {
          name
          emoji
          currency
      }
      }
      `;

    const response = await request.post(
      'https://countries.trevorblades.com/graphql',
      { data: { query: query } }
    );
    console.log(await response.json());

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.data.country).toHaveProperty('name');
    expect(responseBody.data.country).toEqual({
      name: 'United States',
      emoji: '🇺🇸',
      currency: 'USD,USN,USS',
    });
  });
});
