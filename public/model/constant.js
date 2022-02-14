/*****************************************
 * Development to restrict logs to console
 *****************************************/
export const DEV = true

/*****************************************
 *          COLLECTION NAMES
 ***************************************** 
 * Where we reference the collection names
 *****************************************/
export const collectionName = {
    FLASHCARDS: 'flashcards',
    OWNED_DECKS: 'owned_decks',
    USERS: 'users',
    SRS_DATA: 'srs_data',
    FLASHCARDS_DATA: 'flashcards_data',
}

export const documentPrefixes = {
    flashcardDataPrefix: 'flashcard_data_',
    deckDataPrefix: 'deck_data_',
}

/*****************************************
 *          STORAGE FOLDERS
 *****************************************
 * Where we reference the storage of images
 * or anything else stored in the storage 
 * portion.
 * ALL MUST END WITH A FORWARD SLASH
 ******************************************/
export const storageFolderName = {
    FLASHCARD_IMAGES: 'flashcard_images/',
}

/*****************************************
 *              HTML ID'S
 *****************************************
 * Where we reference html id's across 
 ******************************************/
export const htmlIDs = {
    buttonShowCreateAFlashcardModal: 'button-show-create-a-flashcard-modal',
    modalCreateAFlashcard: 'modal-create-a-flashcard',
    formCheckInputIsMultiple: 'form-check-input-is-multiple',
    modalCreateAccount: 'modal-create-account'
}