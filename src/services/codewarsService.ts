import axios from 'axios';

export const CodewarsService = {

  async getUserData() {
    try {
      const response = await axios.get(
        'https://www.codewars.com/api/v1/users/LOL_li_POP'
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch codewars data', error);
      throw new Error('Could not fetch data');
    }
  },
}