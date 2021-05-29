## Testing note 
### Unsure what the particular web of interactions is that causes problems,
### but if you intend to run tests with jest/rtl the magic file:
###```tests/setupTests.js```
### is required to both run tests and compile the app successfully.
### Otherwise when the user attempts to run:
### ```npm run dev```
### the following exception occurs:
### ```ReferenceError: regeneratorRuntime is not defined```