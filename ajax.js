
// GET и POST запросы ========================================================================================================================================================
// Мы работаем в интернете с помощью протокола http. Этот протокол, позволяет общатся браузер (клиенту, компьютеру) и серверу.
// Сервером выступает компьюьер, на котором расположен, хостится, сервис, с которым мы работаем.
// Компьютер, как клиент, отправляет запрос, к серверу, с просьбой предоставить определенного рода информацию.
// Для того, чтобы запросить сервер, о каком то ресурсе, существует несколько методов. Несколько возможностей отправить такой запрос.
// Наиболее часто встречаются методы Get и метод Post. На самом деле, методов значительно больше, но в превалирующем большинстве,
// работать мы будем именно с этими двумя методами.

// Метод Get ========================================================================================================================================================
// Метод Get позволяет запросить информацию у сервера, и отправить запрос серверу, с запросом информации.
// Мы как клиент, можем запросить информацию у сервера. Для того, чтобы запросить информацию, мы должны ему отправить определенный запрос.
// Метод Get один из самых распространенных в сети интернет.
// Метод Get позволяет запросить информацию у сервера, отправив ему определенные данные. Эти данные передаются в url строке.
// Это важная особенность метода. Он не может подругому делать. Он может передавать информацию, через адресную строку.

// Знак вопроса ? в методах, применяется, для того, чтобы url-адрес, и аргументы, которые мы передаем, параметры запроса.
// Параметры запроса в методе Get пишутся следующим образом. Имя ключа =  значение. Если ключей несколько, то используются амперсанды &, чтобы обьединить.
// Метод Get при отправке отправляет специфическую информацию, так называемые заголовки, которые позволяют серверу соориентироватся, как возвращать информацию.
// Эти заголовки содержат важную информацию, которые позволяют согласовать работу нашего компьютера и сервера(сайта).
// Часть заголовков формируется автоматически, часть мы можем изменить. Но особенность метода Get, в том, что инфоромацию передаем через url-строку.

// Статусы
// Статус 404. Если ресурс не найден, то сервер, либо браузер формирует 404.
// Статус 200 обозначает, что все прошло отлично, проблем нет.
// Статус 300 в зависимости от последней цифры, может означать разные вещи, но в основном это вопрос доступов.

// Мы можем посмотреть что мы отправили на сервер во вкладке Payload. Напрмер, полезная нагрузка на сервер, это id, единица измерени и ключ API,
// с которым работаем на данном сервере.
// И ответ Responce сервера. Этот Responce http-протокол всегда работает как строка, он не может иметь типов данных. Поэтому все отправляется и принимается
// как строка.

// Get это полезный метод. Ничего сложного в его формировании нет. Нужно просто сформировать нужный url. Особенность метода в том, что
// через url нельзя передать огромное колличество информации. Тяжело ее в urk адресе вместить. Плюс ко всему браузер имеет ограничение на длинну url.
// И второй минус, все что отправляется этим методом, открыто, видимо и легко читается. Поэтому отправлять пароли или логины эттм методом, не самая лучшая затея.
// У Get метода есть еще один большой плюс. Get запросы, поскольку они все параметры отображают в url. То этот url можно скопировать, передать,
// вставить в закладку. И человек получит состояние ресурса, состояние сервера, состояние страницы в том же виде, в котором вы его оставили.
// Поэтому, часты подход применяется для интернет-магазинов, если у вас есть какие то фильтры. Закладок и т.д. Большинство ресурсов работают именно с Get,
// поскольку Get это метод по умолчанию запроса ресурсов из сети интернет.

// С помощью метода Get мы можем запросить какой то удаленный сервис, получить информацию, и вывести на страницу. Это может быть какой то сторонний сервис
// это может быть и бэкэнд нашего сайта.

// Запросы
// Запросы мы можем делать в браузере, так же можно это делать с помощью сторонних утилит или программ, а можно писать в Java Script.

// AJAX ========================================================================================================================================================

// AJAX - это ассинхронный java script и xml. Это методы которые позволяют в фоновом режиме, послать запрос на сервер с помощью java script.
// Получить результат ответ от сервера, и работать с ним.
// До этого момента, мы могли только использовать формы, которые перезагружают страницу, либо сторонние программы.

// XMLHttpRequest - обьект, позволяет нам посылать запросы с помощью java script на сервер. 
// Пример

let xhttp = new XMLHttpRequest();
// xhttp - это обьект и с этим обьектом мы далее будем работать. Этот обьект может посылать запросы на различные ресурсы.
// Когда мы будем посылать запрос, свойство, состояние запроса будет менятся. За изменение этого свойства будет отвечать атрибут onreadystatechange.
// У нас есть два атрибута onreadystatechange и readyState. 

// Поэтому событию onreadystatechange будем запускать следующую функцию. Когда у нас будет изменятся состояние обьекта, нам нужно понитмать
// состояние xhttp обьекта. Был ли удачен запрос на сервер или не удачен. Отследить состояние запроса мы можем по кодам.
// Это по сути два кода. Первый readyState. Этой проверки недостаточно. Желательно так же посмотреть состояние статуса.
// Что такое Статус. Это статус ответа на запрос. Сам запрос может пройти, мы можем получить данные, но сервер нам может ответить разными вариантами.
// Первый - такого ресурса нет, хотя запрос пришел. Второй - доступ запрещен, и т.д. Поэтому всегда, помимо readyState проверяют еще и статус.
// Если все ок и данные полученны, то это статус 200.
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) { // Этой проверки недостаточно. Желательно так же посмотреть состояние статуса.

	}
}

// Простой AJAX-запрос на jquerry
// Реализация AJAX-обмена.
// В jqerry реализованна функция, которая в качестве параметров, получает конфигурационный обьект.
// Этот конфигурационный обьект содержит: 
$.ajax({
	type: "Get", // тип метода http
	url: "test.js", // куда вы собираетесь отправить запрос
	data: { "a": 10, "b": 20, "someother": "val" }, // Параметры, которые вы хотитпе отправить в запрос
	dataType: "text", // Тип возвращаемого результата. В тексте, в html, в json и т.д.
	succes: function (data) { // Обработчик, функция, которая получит данные, когда запрос отработает.
		console.log(data);
	}
});
// Таким образом, с поиощью готовых инструментов, можно ассинхронно отправлять AJAX-запрос по разным событиям.