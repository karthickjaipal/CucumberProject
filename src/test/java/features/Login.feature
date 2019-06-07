Feature: THBS Webmail login



@Dhanyatest
Scenario: User successful login to THBS
Given User is on Login Page
When User enters valid username "karthick_jaipal@thbs.com" and valid password "Thbs123!"
Then login page is displayed

@Smoketest
Scenario: User successful login to THBS
Given User is on Login Page
When User enters valid username "karthick_jaipal@thbs.com" and invalid password "Thb123!"
Then login page is not displayed

@Regressiontest
Scenario: User successful login to THBS
Given User is on Login Page
When User enters following details
| karthick_jaipal@thbs.com | Thb123!|
Then login page is not displayed

@Dhanyatest
Scenario Outline: User successful login to THBS
Given User is on Login Page
When User enters the username <Username> and password <password>
Then login page is not displayed

Examples:

|Username |password|
|user1    |pwd1    |
|user2    |pwd2    |
|user3    |pwd3    |
|user4    |pwd4    |




