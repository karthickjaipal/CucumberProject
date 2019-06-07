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
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5720123397,
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
  "duration": 126847186,
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
  "duration": 2357505370,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 37781097,
  "status": "passed"
});
formatter.after({
  "duration": 2308859039,
  "status": "passed"
});
});