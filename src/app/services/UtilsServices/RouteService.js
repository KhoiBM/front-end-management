
import { useHistory } from 'react-router-dom';
import config from 'src/environments/config';

export class RouteService {
    static history;
    static init(history) {
        this.history = history;
    }
    static redirectByRole = (role) => {
        switch (role) {
            case config.useRoleName.administrator: this.history.replace("/core/admin/home"); break;
            case config.useRoleName.manager: this.history.replace("/core/manager/home"); break;
            case config.useRoleName.businessStaff: this.history.replace("/core/business_staff/home"); break;
            case config.useRoleName.technicalStaff: this.history.replace("/core/technical_staff/home"); break;
        }
    }


    static push = (data) => {

        this.history.push(data)

    }

}