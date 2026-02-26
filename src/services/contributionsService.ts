import axios from 'axios';

const API_URL = 'https://github-contributions-api.deno.dev';

export const ContributionsService = {

  async fetch(fromDate: string) {
    try {
      const response = await axios.get(
        `${API_URL}/sLesner1.json?from=${fromDate}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch GitHub contributions:', error);
      throw new Error('Could not fetch contributions');
    }
  },
}