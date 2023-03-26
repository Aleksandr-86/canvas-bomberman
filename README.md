<p align="center">
Аналог двухмерной Dandy (NES) игры «Bomberman»
</p>

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

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
