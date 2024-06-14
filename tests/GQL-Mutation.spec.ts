import { test, expect, request } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('GQL', () => {
test('Mutation', async ({ request }) => {

  const randomTitle= faker.person.firstName() // 'Antwan'
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

const response= await request.post('https://hasura.io/learn/graphql',

  {data:{query: mutation},headers:{authorization:'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDY2NmM2N2I2MDJiMzBhZjlmMDJhZmIxOSJ9LCJuaWNrbmFtZSI6ImhyIiwibmFtZSI6ImhyQGdpdm1haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzU2MzZlMmI0Mzc5Mzc3MWExNDQ5YTA0ZGUxNTE4NTk2P3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGaHIucG5nIiwidXBkYXRlZF9hdCI6IjIwMjQtMDYtMTRUMTU6NTQ6MzAuODQ0WiIsImlzcyI6Imh0dHBzOi8vZ3JhcGhxbC10dXRvcmlhbHMuYXV0aDAuY29tLyIsImF1ZCI6IlAzOHFuRm8xbEZBUUpyemt1bi0td0V6cWxqVk5HY1dXIiwiaWF0IjoxNzE4MzgwNDcxLCJleHAiOjE3MTg0MTY0NzEsInN1YiI6ImF1dGgwfDY2NmM2N2I2MDJiMzBhZjlmMDJhZmIxOSIsImF0X2hhc2giOiJrZXN1Vkp3eXROYzM5NXZYLW5jczd3Iiwic2lkIjoib0lYcXl1dlQ3UDVYVlJhN3prS0I0OTZ6Y1FsTGp1MUwiLCJub25jZSI6IjMycVBzcHdMVmhQQktOZHZnbkswUUxhQnRvZ1h1NkRKIn0.Ow2Gr_yYf2Eu3YNsABnTjJewuL8RJrdjKhZAmRz-UMifWq8sVID0iTrf0Y4vOtCXS9l6ZNiZ2oO3qGR_Cc6h27KoSP3n1djCCwzIArF4wlQgWFYTPQ9AOqSAsIXJ6ESeCJg_8h8JsB9yfCB4MTnaaZkhtyM8V8wOx_M_ZidjUXM1lkfSBpv04FjTmfsWviacXqIGbfe9S1tzgv7xkKEmFdbNRoerKzBckND6TT6A1M5NmDyDv2hXUs_U-MiR10YW0dhol4jZEtLyA1sBy1nkzeLivSk_DLpD0uFmVA37y6wZ1WsytmiFRzpj8ercsCc60-Bp4jFPEBYpilvJeLxO8g'}}
)

console.log(await response.json());

const responseBody=await response.json()

expect(response.status()).toBe(200);
expect(responseBody.data.insert_todos.returning[0]).toHaveProperty('title');
expect(responseBody.data.insert_todos.returning[0].title).toEqual(randomTitle)


})
})
