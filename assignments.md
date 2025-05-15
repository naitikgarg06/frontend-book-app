# BI1.2_HW1 -   ADD BOOK FORM FEATURE

## SUMMARY
Added a new component called `AddBookForm` which allows users to add a new book to the database via the frontend UI.

## FEATURES
- form with inputs for book data like title, author etc.
- submit data using POST `/books` API
- adds new book data to the mongoDB database

## NOTES
- The backend route `/books` must be running for this to work

# BI1.3_HW1 - Add DELETE FUNCTIONALITY

## FEATURES
- Add delete button for each book
- let user to delete book using `/books/bookId` route  from database
- displays success message and renders updated book list