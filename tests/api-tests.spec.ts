import { test, expect } from '@playwright/test';

test.describe('Airportgap API tests', () => {
  test.describe('GET /airports API tests', () => {
    let responseBody: any;

    test.beforeEach(async ({ request }) => {
      const response = await request.get(`/api/airports`);
      expect(response.ok()).toBeTruthy();
      responseBody = await response.json();
    });

    test('GET /airports returns exactly 30 airports', async () => {
      expect(responseBody.data).toHaveLength(30);
    });

    test('GET /airports includes specific airports', async () => {
      const airportNames = responseBody.data.map((airport: any) => airport.attributes.name);

      expect(airportNames).toEqual(
        expect.arrayContaining(['Akureyri Airport', 'St. Anthony Airport', 'CFB Bagotville']),
      );
    });
  });

  test('distance between KIX and NRT is > 400 km', async ({ request }) => {
    const response = await request.post(`/api/airports/distance`, {
      form: {
        from: 'KIX',
        to: 'NRT',
      },
    });

    const responseBody = await response.json();
    const distanceKm = responseBody.data.attributes.kilometers;

    expect(distanceKm).toBeGreaterThan(400);
  });
});
