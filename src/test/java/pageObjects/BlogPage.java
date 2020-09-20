package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

public class BlogPage extends HomePage {

	public BlogPage(WebDriver driver) {
		super(driver);
		
	}

	By blogCategory = By.id("cat");
	By avoidPaymentTrapLink = By.linkText("How to Avoid the Preference Payment Trap");
	By companyFinancialStmt = By.cssSelector("a[title*= 'Identifying Signs of Business Failure']");
	By blogContent = By.xpath("//div[@class='entry-content']//p");
	By links = By.tagName("a");
	By paymentTrapHeader = By.xpath("//h1[contains(text(),'Payment Trap')]");
	By companyfinancialStmtHdr = By.xpath("//h1[contains(text(),'Signs of Business Failure')]");
	By blogLinks = By.xpath("//div[@class='entry-content']//p//a");

	WebDriverWait wait = new WebDriverWait(driver, 15);
	
	public void selectBlogCategory(String category) {
		Select s = new Select(driver.findElement(blogCategory));
		s.selectByVisibleText(category);
	}

	public void clickBlogPost(String postName) throws InterruptedException
	{
		if(postName.equals("How to Avoid the Preference Payment Trap"))
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(avoidPaymentTrapLink));
			driver.findElement(avoidPaymentTrapLink).click();
			wait.until(ExpectedConditions.visibilityOfElementLocated(paymentTrapHeader));
		}
		else if(postName.equals("Company Financial Statements"))
		{
			wait.until(ExpectedConditions.visibilityOfElementLocated(companyFinancialStmt));
			driver.findElement(companyFinancialStmt).click();
			wait.until(ExpectedConditions.visibilityOfElementLocated(companyfinancialStmtHdr));
		}
	}

	
	public void verifyLinks(String category) throws InterruptedException {

		SoftAssert softassert = new SoftAssert();
		List<WebElement> linkElements = driver.findElements(blogLinks);

		String[] linkArray = new String[linkElements.size()];
		String[] urlArray = new String[linkElements.size()];

		for (int i = 0; i < linkElements.size(); i++) {

			if (category.equals("Risk Management")) {
				wait.until(ExpectedConditions.visibilityOfElementLocated(paymentTrapHeader));
			} else {
				wait.until(ExpectedConditions.visibilityOfElementLocated(companyfinancialStmtHdr));
			}

			linkArray[i] = linkElements.get(i).getText();
			urlArray[i] = linkElements.get(i).getAttribute("href");

		}

		for (int j = 0; j < linkArray.length - 1; j++) {

			if (category.equals("Risk Management")) {
				wait.until(ExpectedConditions.visibilityOfElementLocated(paymentTrapHeader));

			} else {
				wait.until(ExpectedConditions.visibilityOfElementLocated(companyfinancialStmtHdr));
			}

			if (linkArray[j].equals("Watch the webinar")) {
				continue;
			}

			else {
				driver.findElements(blogLinks).get(j).click();
				Thread.sleep(4000);
				String url = driver.getCurrentUrl();
				softassert.assertEquals(url, urlArray[j]);
				driver.navigate().back();
			}
			
		}
		try
		{
			softassert.assertAll();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}

}
