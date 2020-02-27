Feature: Login
@Search
Scenario: Verify user Login
Given Launch the application
When Click on the sign in link
And Login with
|Username|password|
|automation@email.com|test@123|
|automation3@email.com|test@123|
# # And Login to the application with '<Username>' and '<password>'
# # And Search with the product '<Searchitem>'
# # Then Verify the product
# And Click on Signout


# Examples:
# |Username|password|Searchitem|
# |automation@email.com|test@123|Blouse|
# |automation3@email.com|test@123|Blouse|
