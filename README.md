# nevatrip

```
Тестовое задание на позицию "HTML-верстальщик" компания "Nevatrip"
```

## Описание задания: [task description](https://github.com/Nevatrip/layout-test-task)

## 1. Верстка блока

![nevatrip](nevatrip/screenshots/nevatrip.png "demo nevatrip")
![nevatrip](nevatrip/screenshots/nevatrip-mobile.png "demo nevatrip")

### Установка проекта

* установить ```gulp``` глобально: ```yarn global add gulp-cli```
* скачать необходимые зависимости: ```yarn```
* чтобы начать работу, ввести команду: ```yarn run dev``` (режим разработки)
* чтобы собрать проект, ввести команду ```yarn run build``` (режим сборки)

## 2. Таблица на странице

Добавить по селектору body и html свойства: overflow-x: hidden; или overflow: hidden;
Чтобы убрать горизонтальный скролл одного HTML тега html или body не всегда достаточно, чтобы прокрутка исчезла. Обязательно нужно добавить overflow-x: hidden; к обоим тегам.

```
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;
}

body {
  margin: 0;
  overflow-x: hidden;
}
```