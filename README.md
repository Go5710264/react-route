[![Dak1 CI/CD](https://github.com/Go5710264/react-router/actions/workflows/deploument.yml/badge.svg)](https://github.com/Go5710264/react-router/actions/workflows/deploument.yml)

## React-router

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

С помощью React Router реализована маршрутизация на странице.

<br>

<img src="./react_router.gif" width="360" height="400" alt="Demo">

<br>

-   При клике на одно из блюд происходит роутинг на страницу с рецептом. **Ререндеринг** всей страницы **не** происходит, а заменяется только один компонент на странице. 
-   При переходе по сслыке с несуществующим путём - происходит роутинг на страницу **404** (содержащая в себе ссылку на главную страницу).

Так же предусмотрена ситуация, при которой необходимо произвести **редирект** со старого url-адреса 