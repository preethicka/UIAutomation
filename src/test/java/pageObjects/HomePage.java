package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HomePage {
	
	protected WebDriver driver;

	public HomePage(WebDriver driver)
	{
		this.driver = driver;
	}
	
	By blogLnk = By.linkText("Blog");
	
	public BlogPage clickBlog()
	{
		driver.findElement(blogLnk).click();
		return new BlogPage(driver);
	}
	
}
