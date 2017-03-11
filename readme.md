<h2>Тестовое задание</h2>
Приложение предназначено для получения заказов с сервера с возможностью их сортировки и фильтрации.

###Приложение состоит из:
<code>/js/store.js </code>
Описывает хранилище полученных данных с сервера, а также данных отфильтрованных на клиенте.
У объекта хранилища за это отвечают свойства .state и .filtered соответственно.

<code>/js/functions.js </code>
Включает в себя вспомогательные функции по фильтрации и сортировке:
    filter() манипулирует исходным состоянием хранилища .state и записывает результат в .filtered
    sortAsc() и sortDesc() в рамках приложения, как правило, возвращают отсортированное свойство .filtered хранилища.

<code>/js/components/orders.js</code>
Содержит в себе процедуру отрисовки заказов. На вход принимает отсортированный/отфильтрованный объект данных из хранилища.
Разметка реализована в строковом виде через innerHTML, так как нет необходимости в манипуляции DOM элементами. Если будет нужна необходимость
добавить интерактивные действия к заказам, процедуру необходимо переписать должным образом.

<code>/js/app.js</code>
Содержит в себе процедуру запроса к серверу при инициализации документа, а также инициализирует первоначальное состояние хранилища и управляющих элементов
(поля и кнопки сортировки и фильтрации).