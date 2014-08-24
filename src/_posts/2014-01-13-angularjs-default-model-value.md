---
title:  "Значение модели по умолчанию в AngularJS"
date:   2014-01-13 02:28:00
tags:   ["javascript", "angularjs"]
layout: "post"

---

Вот нужно мне в AngularJS красиво задать дефолтное значение для модели прямо в HTML. Например, имеем `input`, значение которого мы, по какой-то причине, не хотим дергать с сервера. На [Stackoverflow](http://stackoverflow.com/questions/13769732/angular-js-init-ng-model-from-default-values) нам скорее всего посоветуют проставить значение в контроллере, что не кошерно, я например не использую роутинг и не хочу парсить URL, чтобы получить ID текущего элемента, на то есть серверный шаблонизатор, который пропихнет нужное мне значение в нужное поле, а заодно и в скоуп.

<!-- cut -->

## Решение

Можно при инициализации элемента, с помощью `ngInit` проставить нужное значение в скоупе.

```html
<input type="text" name="name" ng-model="variable" ng-init="varable='value'"> <!-- $scope.variable = value; -->
```

Но не красиво, не люблю я лишние кавычки. А можно запилить свою директиву `ngDefault`, которая будет делать тоже самое.

```js
App.directive('ngDefault', function($rootScope) {
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      if (typeof attrs.ngModel != 'undefined') {
        scope[attrs.ngModel] = attrs.ngDefault;
      }
    }
  }
});
```

```html
<input type="text" name="name" ng-model="variable" ng-default="value"> <!-- $scope.variable = value; -->
```

Вот это пожалуй то, что нужно. Вроде как это не соответствует идеологии, на том-же Stackoverflow говорят, что я должен пренеприменно вытащить значение с сервера через API.

> Ideally, you want to send out your Angular HTML templates, then pull down your values via $http in JSON and put them in your scope.

Но более весомых доводов не юзать директиву я не вижу, ибо удобнее.
