$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/misLogin.feature");
formatter.feature({
  "line": 1,
  "name": "MIS Login",
  "description": "",
  "id": "mis-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "mis-login;user-successful-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 26,
      "id": "mis-login;user-successful-login;;1"
    },
    {
      "cells": [
        "3933",
        "Kartic@9632"
      ],
      "line": 27,
      "id": "mis-login;user-successful-login;;2"
    },
    {
      "cells": [
        "3933",
        "Kartic@9632"
      ],
      "line": 28,
      "id": "mis-login;user-successful-login;;3"
    },
    {
      "cells": [
        "3933",
        "Kartic@9632"
      ],
      "line": 29,
      "id": "mis-login;user-successful-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 243651,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters 3933 and Kartic@9632",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 6580808502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3933",
      "offset": 12
    },
    {
      "val": "Kartic@9632",
      "offset": 21
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 3436536691,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 99067,
  "status": "passed"
});
formatter.after({
  "duration": 68276,
  "status": "passed"
});
formatter.before({
  "duration": 101745,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters 3933 and Kartic@9632",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 5412911010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3933",
      "offset": 12
    },
    {
      "val": "Kartic@9632",
      "offset": 21
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2521665538,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 85233,
  "status": "passed"
});
formatter.after({
  "duration": 43732,
  "status": "passed"
});
formatter.before({
  "duration": 74969,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters 3933 and Kartic@9632",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 7968334278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3933",
      "offset": 12
    },
    {
      "val": "Kartic@9632",
      "offset": 21
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 2364708697,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 52657,
  "status": "passed"
});
formatter.after({
  "duration": 48641,
  "status": "passed"
});
});