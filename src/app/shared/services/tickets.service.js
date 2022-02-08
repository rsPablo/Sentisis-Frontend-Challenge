//  .-- axios --
import axios from 'axios';

import { API_TICKETS } from '../components/constants/api.constants';

export default {

    getTicket: async () => {
      const response = await axios.get(API_TICKETS);
      return response.data;
    }
}