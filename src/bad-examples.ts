// Examples of UI strings that VIOLATE the style guide
// These should trigger warnings from stringly-typed

export const messages = {
  // Too technical and jargon-heavy
  saveError: "ERROR: Persistence layer failed to commit transaction due to network timeout exception. Please retry the operation.",

  // Passive voice and too formal
  welcome: "The user's session has been successfully authenticated and initialized.",

  // Blaming the user, not helpful
  validationError: "You entered invalid data. Fix your mistakes before proceeding.",

  // Way too long and complex
  emptyState: "It appears that there are currently no items available in your collection at this time, which may be because you have not yet added any items, or because all previously added items have been removed or archived by you or another authorized user.",

  // ALL CAPS and aggressive
  warning: "WARNING: THIS ACTION CANNOT BE UNDONE. ALL DATA WILL BE PERMANENTLY DELETED.",

  // Condescending tone
  help: "As you probably don't know, this feature allows administrators to configure system parameters.",
};

export const buttons = {
  // Too vague
  submit: "Submit",

  // Too technical
  execute: "Execute Operation",

  // Unnecessarily long
  save: "Click Here to Save Your Current Changes",
};

export const placeholders = {
  // Not helpful, too generic
  email: "Enter value",

  // Technical jargon
  search: "Query string input field",
};

export const errors = {
  // Error code instead of human-readable message
  notFound: "ERR_404: Resource not located in database",

  // No guidance on how to fix
  generic: "An unexpected error has occurred.",
};
