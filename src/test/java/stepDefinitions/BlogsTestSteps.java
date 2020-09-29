package stepDefinitions;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import pageObjects.BlogPage;
import pageObjects.HomePage;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


@RunWith(Cucumber.class)
public class BlogsTestSteps {
	
	public WebDriver driver;
	public Properties prop;
	HomePage home;
	BlogPage blog;
	private static final Logger log = LogManager.getLogger(BlogsTestSteps.class.getName());

	
	@Before
	public void initializeDriver() throws IOException
	{

		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/java/resources/data.properties");
		prop.load(fis);
		String browserName = prop.getProperty("browser");
		int timeOut = Integer.parseInt(prop.getProperty("implicitTimeout"));
		
		if(browserName.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","Drivers//chromedriver.exe");
			driver= new ChromeDriver();
		}
		else if(browserName.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","Drivers//geckodriver.exe");
			driver = new FirefoxDriver();
		}
    	log.info("Driver is initialized");
    	driver.manage().timeouts().implicitlyWait(timeOut, TimeUnit.SECONDS);	
    }
	
    @Given("^I am on creditor watch home page$")
    public void i_am_on_creditor_watch_home_page() throws Throwable {
    	driver.get(prop.getProperty("baseURL"));
    	driver.manage().window().maximize();
    	log.info("The Creditor watch home page is launched");
    }

    @When("^I click on Blog link$")
    public void i_click_on_blog_link() throws Throwable {
    	home= new HomePage(driver);
    	blog= home.clickBlog();
    	log.info("The Creditor Watch blog page is loaded");
    }

    @And("^select the category (.+)$")
    public void select_the_category(String categoryname) throws Throwable {
    	blog.selectBlogCategory(categoryname);
    	log.info("The Creditor Watch blog " +categoryname+" category is selected");
    }

    @And("^select the Blog post (.+)$")
    public void select_the_blog_post(String postname) throws Throwable {
    	blog.clickBlogPost(postname);
    	log.info("The blog post "+ postname +" is now displayed");
    }
    
    @Then("^I validate all the anchor tags text in the post (.+)$")
    public void i_validate_all_the_anchor_tags_text_in_the_post(String postname) throws Throwable {
    	blog.verifyLinks(postname);
    	log.info("All the anchor tags in the post "+postname+" are validated successfully");
    	
    }
    
    @After 
    public void cleanUp(){ 
    	driver.quit(); 
    	} 
    
}
