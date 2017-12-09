export function selectBook(book) {
    // Select book is an ActionCreator, and needs to return an Action
    // the object MUST have 'type' property
    return {
        type: "BOOK_SELECTED",
        payload: book
    };
}