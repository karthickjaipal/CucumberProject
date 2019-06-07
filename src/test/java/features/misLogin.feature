Feature: MIS Login




Scenario: User successful login
Given user is on MIS login page
When user enters username "3933" password "Kartic@9632"
Then homepage is displayed


Scenario: User successful login
Given user is on MIS login page
When user enters the user credentials
|3934|Kartic@963|
Then homepage is displayed

@Smoketest
Scenario Outline: User successful login
Given user is on MIS login page
When user enters <Username> and <Password>
Then homepage is displayed

Examples:

|Username|Password   |
|3933    |Kartic@9632|
