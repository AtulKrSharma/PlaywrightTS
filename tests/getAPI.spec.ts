import { test, expect } from '@playwright/test';

test.describe('API test suite', () => {
  test('Get api call', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=3');
    console.log(await response.json());
    expect(response.status()).toBe(200);
  });

  test('post api call', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        name: 'atul',
        job: 'test leader',
      },
    });

    console.log(await response.json());
    expect(response.status()).toBe(201);
  });

  test('put api call', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/694', {
      data: {
        job: 'test QA leader',
      },
    });

    console.log(await response.json());
    expect(response.status()).toBe(200);
  });
});
