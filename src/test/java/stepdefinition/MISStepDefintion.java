package stepdefinition;


import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class MISStepDefintion {
	
	
    @Given("^user is on MIS login page$")
    public void user_is_on_mis_login_page() throws Throwable {
        System.out.println("user is on MIS login page");
    }

    @When("^user enters username \"([^\"]*)\" password \"([^\"]*)\"$")
    public void user_enters_username_something_password_something(String strArg1, String strArg2) throws Throwable {
    	System.out.println("the username"+strArg1);
    	System.out.println("the username"+strArg2);
    }
    
    @When("^user enters the user credentials$")
    public void user_enters_the_user_credentials(DataTable data) throws Throwable {
    	List<List<String>> obj=data.raw();
    	String uname=obj.get(0).get(0);
    	String pwd=obj.get(0).get(1);
    	System.out.println("the username"+uname);
    	System.out.println("the username"+pwd);
    }
    
    @When("^user enters (.+) and (.+)$")
    public void user_enters_and(String username, String password) throws Throwable {
    	System.out.println("the username"+username);
    	System.out.println("the username"+password);
    }

    @Then("^homepage is displayed$")
    public void homepage_is_displayed() throws Throwable {
    	System.out.println("Home page is displayed");
        
    }

}