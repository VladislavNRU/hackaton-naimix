import { App } from 'vue';
import dayjs from 'dayjs';

import 'dayjs/locale/ru';

dayjs.locale('ru');

export default {
    install(app: App) {
        app.config.globalProperties.$dayjs = dayjs;
    },
};
