<h2 align="center">
Аналог двухмерной Dandy (NES) игры «Bomberman»
</h2>

<p align="center">
  <a href="https://www.w3schools.com/html/html5_canvas.asp">
    <img src="https://img.shields.io/badge/Canvas-blueviolet?style=plastic"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18.2.0-blue?style=plastic&logo=react"/>
  </a>
  <a href="https://redux-toolkit.js.org/">
    <img src="https://img.shields.io/badge/Redux Toolkit-1.9.1-blue?style=plastic&logo=redux"/>
  </a>
  <a href="https://github.com/css-modules/css-modules">
    <img src="https://img.shields.io/badge/CSS Modules-gray?style=plastic&logo=cssmodules"/>
  </a>
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/PostgreSQL-gray?style=plastic&logo=postgresql"/>
  </a>
  <a href="https://sequelize.org/">
    <img src="https://img.shields.io/badge/Sequelize-gray?style=plastic&logo=sequelize"/>
  </a>
  <a href="https://axios-http.com/docs/intro">
    <img src="https://img.shields.io/badge/Axios-1.3.4-blue?style=plastic&logo=axios"/>
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Express.js-4.18.1-blue?style=plastic&logo=express"/>
  </a>
  <a href="https://jestjs.io/">
  <img src="https://img.shields.io/badge/Jest-^28-blue?style=plastic&logo=jest"/>
  </a>
  <a href="https://eslint.org/">
    <img src="https://img.shields.io/badge/ESLint-8.23.0-blue?style=plastic&logo=eslint"/>
  </a>
  <a href="https://stylelint.io/">
    <img src="https://img.shields.io/badge/Stylelint-14.16.1-blue?style=plastic&logo=stylelint"/>
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-3.0.7-blue?style=plastic&logo=vite"/>
  </a>
  <a href="https://lerna.js.org/">
    <img src="https://img.shields.io/badge/Lerna-^5.4.3-blue?style=plastic&logo=lerna"/>
  </a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Docker-gray?style=plastic&logo=docker"/>
  </a>
  <a href="https://nginx.org/ru/">
    <img src="https://img.shields.io/badge/Nginx-gray?style=plastic&logo=nginx"/>
  </a>
</p>

![image](https://user-images.githubusercontent.com/96790009/227793281-58facffe-7200-49ab-8978-1616dc070c81.png)

### Запуск:

1. Убедитесь что у вас установлен `node` и `docker`
2. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
3. Выполните команду `yarn dev`
4. Выполните команду `yarn dev --scope=client` чтобы запустить только клиент
5. Выполните команду `yarn dev --scope=server` чтобы запустить только server

<details>
<summary>Добавление зависимостей</summary>

В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента
`yarn lerna add {your_dep} --scope client`

Для сервера
`yarn lerna add {your_dep} --scope server`

И для клиента и для сервера
`yarn lerna add {your_dep}`

Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`
`yarn lerna add {your_dep} --dev --scope server`

</details>

<details>
<summary>Тестирование</summary>

Для запуска всех тестов используйте команду:

`yarn test`

Для запуска тестов только для клиента:

`yarn test --scope=client`

Для запуска только для сервера:

`yarn test --scope=server`

Для клиента были внедрены `snapshot` тесты, если вы делаете изменения в разметке, то тест "упадет".

Если тест "упал", то в окне терминала будет показан `diff` (разница между тем, что было, и тем что стало).

Если изменения вас устраивают, то необходимо обновить тест.
Как это сделать:

1.  Нужно перейти в каталог клиента: `cd packages/client`
2.  Обновить тест `npm test -- -u -t <имя теста>`

Если изменения вас не устраивают, то верните код файла компонента в первоначальный вид.

Если вы написали новый компонент, то для него необходимо написать `snapshot` тест. Для этого создайте файл рядом с компонентом под названием `<componentName>.snap.test.tsx`, опишите тест и запустите команду `yarn test --scope=client`

Документация по `snapshot` тестам [тут](https://jestjs.io/docs/snapshot-testing).

</details>

<details>
<summary>Linters</summary>

`yarn lint`

</details>

<details>
<summary>Prettier</summary>

`yarn format`

</details>

<details>
<summary>Сборка и предварительный просмотр проекта</summary>

Сборка:
`yarn build`

Предварительный просмотр:
`yarn preview --scope client`
`yarn preview --scope server`

</details>

<details>
<summary>Hooks</summary>

В проекте используется [lefthook](https://github.com/evilmartians/lefthook)
Для пропуска проверок используйте `--no-verify`

</details>

<details>
<summary>Автоматическое развёртывание статики на vercel</summary>

Зарегистрируйте аккаунт на [vercel](https://vercel.com/)
Следуйте [инструкции](https://vitejs.dev/guide/static-deploy.html#vercel-for-git)
В качестве `root directory` укажите `packages/client`

Все PR будут автоматически равёртываться на vercel. URL будет предоставлен развёртывающим ботом.

</details>

<details>
<summary>Окружение в docker</summary>

Перед первым запуском выполните `node init.js`

`docker compose up` - запустит три сервиса

1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`

</details>

<details>
<summary>Яндекс Облако</summary>

1. Создан сервер на платформе яндекс cloud
2. Создана виртуальная машина на UBUNTU
3. Серверу присвоен статический адрес 158.160.51.238

</details>
