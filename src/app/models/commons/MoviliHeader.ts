import {side} from '../../shares/static';

export class MoviliHeader {

    title?: string;
    back?: boolean;
    filter?: side;
    search?: boolean;
    logo?: boolean;
    exit?: boolean;
    chat?: boolean;
    basket?: boolean;
    rightTitle?: string;
    location?: string;
    darkMode?: boolean;
    addNew?: boolean;
    emptyUser?: boolean;


    constructor(title?: string, back?: boolean,
                filter?: side, search?: boolean,
                logo?: boolean, exit?: boolean,
                chat?: boolean, basket?: boolean,
                rightTitle?: string, location?: string,
                darkMode?: boolean, addNew?: boolean, emptyUser?: boolean) {
        this.title = title;
        this.back = back;
        this.filter = filter;
        this.search = search;
        this.logo = logo;
        this.exit = exit;
        this.chat = chat;
        this.basket = basket;
        this.rightTitle = rightTitle;
        this.location = location;
        this.darkMode = darkMode;
        this.addNew = addNew;
        this.emptyUser = emptyUser;
    }

    static HOME(cityString: string): MoviliHeader {
        return new MoviliHeader(null,
            null,
            null,
            null,
            true,
            null,
            true,
            null,
            null,
            cityString,
            null);
    }


    static PROFILE_DETAIL(): MoviliHeader {
        return new MoviliHeader('Профиль');
    }

    static EDIT_PROFILE(): MoviliHeader {
        return new MoviliHeader('Изменить профиль',
            true,
            null,
            null,
            null,
            null,
            null,
            null,
            'Готово',
            null,
            null);
    }

    static AUTHOR_PROFILE(): MoviliHeader {
        return new MoviliHeader('Моя страница',
            true);
    }


    static SERVICE_PAGE(): MoviliHeader {
        return new MoviliHeader('Выберите услугу',
            true);
    }

    static CATEGORIES_PAGE(): MoviliHeader {
        return new MoviliHeader('Выберите категорию',
            true);
    }

    static LOGIN_PAGE(): MoviliHeader {
        return new MoviliHeader(null,
            null,
            null,
            null,
            true);
    }

    static APPOINTMENT_INFO(): MoviliHeader {
        return new MoviliHeader('Информация о записи',
            true,
            'end');
    }


    static QR(): MoviliHeader {
        return new MoviliHeader('QR-Сканнер');
    }

    static ISP_SERVICES(): MoviliHeader {
        return new MoviliHeader('Мои услуги',
            true,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            true,
        );
    }

    static SEARCH_SERVICE(): MoviliHeader {
        return new MoviliHeader('Поиск услуг',
            null,
            'end');
    }

    static HISTORY(title: string): MoviliHeader {
        return new MoviliHeader(title,
            null,
            'start');
    }

    static LOGIN(): MoviliHeader {
        return new MoviliHeader('',
            null,
            null,
            null,
            true);
    }

    static REGISTER(): MoviliHeader {
        return new MoviliHeader('',
            true,
            null,
            null,
            true);
    }

    static SMS(): MoviliHeader {
        return new MoviliHeader(null,
            true,
            null,
            null,
            true);
    }

    static EMPLOYEE(): MoviliHeader {
        return new MoviliHeader('Мастера',
            true,
            'end');
    }

    static PRODUCT_LIST(title: string): MoviliHeader {
        return new MoviliHeader(title,
            true,
            'end');
    }

    static FILTER(): MoviliHeader {
        return new MoviliHeader('Фильтры',
            null,
            null,
            null,
            null,
            true);
    }

    static ABOUT(title: string): MoviliHeader {
        return new MoviliHeader(title,
            true,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            true);
    }

    static PRODUCT_DETAIL(title: string): MoviliHeader {
        return new MoviliHeader(title,
            true,
            null,
            null,
            null,
            null,
            null,
            null,
            'Готово');
    }

    static BALANCE_PAGE() {
        return new MoviliHeader(
            'Мой баланс',
            true,
        );
    }

    static MY_CARS() {
        return new MoviliHeader(
            'Мой гараж',
            true,
        );
    }

    static TITLE_WITH_BACK(title) {
        return new MoviliHeader(
            title,
            true,
        );
    }

}


