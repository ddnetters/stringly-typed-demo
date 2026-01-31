// Example UI strings to demonstrate brand voice validation

export const ERROR_MESSAGES = {
  // This violates style guide: technical jargon, passive voice, no fix suggestion
  networkError: "ERROR: Connection was terminated by the server due to a TCP timeout exception in the request handler.",

  // This violates style guide: condescending, blaming the user
  validationError: "You entered invalid data. The system cannot process your incorrect input.",

  // This violates style guide: ALL CAPS, overly formal
  saveError: "YOUR REQUEST COULD NOT BE PROCESSED AT THIS TIME. We apologize for any inconvenience this may have caused.",
};

export const BUTTON_LABELS = {
  // This violates style guide: vague, not action-oriented
  submit: "Click Here",

  // This violates style guide: too long, not specific
  continue: "Proceed to the Next Step in the Process",
};

export const PLACEHOLDER_TEXT = {
  // This violates style guide: not helpful, no example format
  email: "Enter data here",

  // This violates style guide: technical jargon
  phone: "Input phone number in E.164 format with country code prefix",
};
