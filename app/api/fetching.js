import { NextRequest } from 'next/server';

export async function handler(request) {
    try {
      const city = request.geo.city;
      const country = request.geo.country;

      return {
        status: 200,
        body: {
          city,
          country
        }
      };

    } catch (error) {
      console.error('Error processing request:', error);
      return {
        status: 500,
        body: {
          error: 'Internal Server Error'
        }
      };
    }
  }