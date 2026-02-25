import axios from 'axios';

export interface ContributionData {
  total: number;
  daily: Record<string, { count: number }>;
}

const API_URL = 'https://github-contributions-api.deno.dev';

export const ContributionsService = {
  data: null as ContributionData | null,

  async fetch(fromDate: string) {
    try {
      const response = await axios.get<ContributionData>(
        `${API_URL}/sLesner1.json?from=${fromDate}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch GitHub contributions:', error);
      throw new Error('Could not fetch contributions');
    }
  },
}