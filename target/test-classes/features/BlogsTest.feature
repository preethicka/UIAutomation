Feature: Validate the anchor tags text in the Blogs

Scenario Outline: Validate the anchor tags text in the Blog Post 
			
Given I am on creditor watch home page
When I click on Blog link 
And select the category <category name>
And select the Blog post <post name>
Then I validate all the anchor tags text in the post <category name> 

Examples:
|category name| post name|
|Risk Management |How to Avoid the Preference Payment Trap|
|Due Diligence | Company Financial Statements |

