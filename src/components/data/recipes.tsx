export interface TitleDescription {
    title: string;
    description: string;
}

type Recipe = { // Mapped-type
    [key: string]: TitleDescription
}

export const RECIPES : Recipe = {
    '1': {
        title: 'Торт Наполеон',
        description:'Почти французский торт'
    },
    '2': {
        title: 'Борщ',
        description:'Аля русс'  
    },
    '3': {
        title: 'Пельмени',
        description:'Вкусные пельмени'
    },
    'qwerasdf': {
        title: 'Картофельное пюре',
        description:'Белорусское пюре'
    },
}