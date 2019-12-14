// example - delete later
import { ajax } from 'rxjs/ajax';

export const mockService = () => ajax.getJson('./mock.json');
