import moment from 'moment';
import { interpolate } from 'react-native-reanimated';

export function formatDate(dateString) {
    const parsedDate = moment(new Date(dateString));

    if (!parsedDate.isValid()) { //parsedDate.isValid() == false
        return Date.now();
    }

    return parsedDate.format('DD/MM/YYYY HH:mm');
}
