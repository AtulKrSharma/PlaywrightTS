import { test, expect, request } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('GQL', () => {
  test('Mutation', async ({ request }) => {
    const randomTitle = faker.person.firstName(); // 'Antwan'
    const mutation = `mutation {
  insert_todos(objects: {is_public: false, title: ${randomTitle}}) {
    returning {
      id
      is_public
      title
      user {
        id
        name
      }
      user_id
    }
  }
}`;

    const response = await request.post(
      'https://hasura.io/learn/graphql',

      {
        data: { query: mutation },
        headers: {
          authorization:
            'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY2NzNiMGNiMmNlOTgyZmY1YWNjYTYyMCJ9LCJuaWNrbmFtZSI6InNoYXJtYS5hdHVsa3VtYXIyOSIsIm5hbWUiOiJzaGFybWEuYXR1bGt1bWFyMjlAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzI3NGIxOTNjM2IyZjEzZDA3OTdiOTcxMjY5ZTJlYzYzP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGc2gucG5nIiwidXBkYXRlZF9hdCI6IjIwMjQtMDYtMjBUMDQ6MzI6MTIuMjQxWiIsImlzcyI6Imh0dHBzOi8vZ3JhcGhxbC10dXRvcmlhbHMuYXV0aDAuY29tLyIsImF1ZCI6IlAzOHFuRm8xbEZBUUpyemt1bi0td0V6cWxqVk5HY1dXIiwiaWF0IjoxNzE4ODU3OTMzLCJleHAiOjE3MTg4OTM5MzMsInN1YiI6ImF1dGgwfDY2NzNiMGNiMmNlOTgyZmY1YWNjYTYyMCIsImF0X2hhc2giOiJKakxrcjNYcmlzdkV2WEhueTJ1dFVnIiwic2lkIjoiNjJ3QzNQSWJGdWZoM2NNd2g2d1kyTF9XQlkzUkNnYkQiLCJub25jZSI6IlJqVUFKZ2dpcHdEOWYzZi1FLlJ2eWJuWTFnOEw1QzBKIn0.K-9aOKRYquU3jqo696lJm8PTt-qBMeBKN4VRVDXs6H9bJEFSHv-8nQ5kBd5nsBriuq4cxEm-cFNAHk6wzP5xWHBAJaTMx4xOsEMaA-tQ4h44IEKaygBzOUecD6VGeIdX_nmFXfD_0MQaFGOHqm4fgi8-okt0effRpcMdL0IT30hidlShiGZkSGACV0M3Xz-M0WnjLLaMuMMVQhpE4YdaKUYQUUVefiFY4A0KfNhx_kjeoqFouwsz_qE8Yo-KN5bg0IgGR-XKh3Yz8eNn33flsattVcap7BcDKyP_nIz2RtKgoFe6ceAPKdGOhe8jpBbj2U0tSKoijjvmfO27RqJsPw',
        },
      }
    );

    console.log(await response.json());

    const responseBody = await response.json();

    expect(response.status()).toBe(200);
    expect(responseBody.data.insert_todos.returning[0]).toHaveProperty('title');
    expect(responseBody.data.insert_todos.returning[0].title).toEqual(
      randomTitle
    );
  });
});
