// example - delete later
import { ajax } from 'rxjs/ajax';
import { env } from '../utils';

export const mockService = () => ajax.getJSON(`${env.REACT_APP_API_URL}/manifest.json`);
