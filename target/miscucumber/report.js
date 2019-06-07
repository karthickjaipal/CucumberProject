$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/misLogin.feature");
formatter.feature({
  "line": 1,
  "name": "MIS Login",
  "description": "",
  "id": "mis-login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 238743,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters username \"3933\" password \"Kartic@9632\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 138063616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3933",
      "offset": 22
    },
    {
      "val": "Kartic@9632",
      "offset": 38
    }
  ],
  "location": "MISStepDefintion.user_enters_username_something_password_something(String,String)"
});
formatter.result({
  "duration": 2299960,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 86126,
  "status": "passed"
});
formatter.after({
  "duration": 69168,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters \u003cUsername\u003e and \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "mis-login;user-successful-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 25,
      "id": "mis-login;user-successful-login;;1"
    },
    {
      "cells": [
        "user1",
        "pwd1"
      ],
      "line": 26,
      "id": "mis-login;user-successful-login;;2"
    },
    {
      "cells": [
        "user2",
        "pwd2"
      ],
      "line": 27,
      "id": "mis-login;user-successful-login;;3"
    },
    {
      "cells": [
        "user3",
        "pwd3"
      ],
      "line": 28,
      "id": "mis-login;user-successful-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 100852,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters user1 and pwd1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 108438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user1",
      "offset": 12
    },
    {
      "val": "pwd1",
      "offset": 22
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 133428,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 54442,
  "status": "passed"
});
formatter.after({
  "duration": 66938,
  "status": "passed"
});
formatter.before({
  "duration": 81664,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters user2 and pwd2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 95944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user2",
      "offset": 12
    },
    {
      "val": "pwd2",
      "offset": 22
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 175375,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 182515,
  "status": "passed"
});
formatter.after({
  "duration": 199472,
  "status": "passed"
});
formatter.before({
  "duration": 205720,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User successful login",
  "description": "",
  "id": "mis-login;user-successful-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on MIS login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user enters user3 and pwd3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "homepage is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MISStepDefintion.user_is_on_mis_login_page()"
});
formatter.result({
  "duration": 178499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user3",
      "offset": 12
    },
    {
      "val": "pwd3",
      "offset": 22
    }
  ],
  "location": "MISStepDefintion.user_enters_and(String,String)"
});
formatter.result({
  "duration": 149493,
  "status": "passed"
});
formatter.match({
  "location": "MISStepDefintion.homepage_is_displayed()"
});
formatter.result({
  "duration": 50426,
  "status": "passed"
});
formatter.after({
  "duration": 61582,
  "status": "passed"
});
});