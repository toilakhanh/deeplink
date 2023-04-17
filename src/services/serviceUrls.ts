import {BASE_URL} from '@env';

export default {
  url: {
    HOST: BASE_URL,
    // demo: 'api/TokenAuth/Authenticate',
  },
  statusCode: {
    success: [200, 201, 204],
    auth: [401],
    notFound: [404],
    error: [500, 400],
  },
};
