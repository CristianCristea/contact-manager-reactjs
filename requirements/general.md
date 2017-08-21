# User stories

* can create profile - implement later
* can log in ( automatically after create profile) - implement later
* can add contact
  - must input all data
  - can save
  - can cancel
* can edit an existing contact
  - can change the existing data
  - can save
  - can cancel
* can delete an existing contact
* can search the existing contacts
* can display all existing contacts in a category(tag)

# Components
* Header:
  - stateless
  - render title

* Nav:
  - stateless
  - add contact button
  - search button

* Footer:
  - stateless
  - rendre copyright and other info

* AddContact:
  - stateful
  - render a form
  - check for valid input
  - submit and cancel buttons

* DisplayContact:
  - stateless
  - render or return a contact
  - render the data
  - edit and delete buttons

* DisplayContacts:
  - stateless
  - is a list with all DisplayContact elements
  - render the list based on selectContacts input (all or just a category)

* EditContact:
  - same as AddContact
  - pre-populate inputs with existing data
  - save and cancel buttons
