import { Document } from "./document";

// Usage
const document = new Document();
console.log(`Current state: ${document.getStateName()}`);

document.edit();
document.submitForReview();
console.log(`Current state: ${document.getStateName()}`);

document.approve();
console.log(`Current state: ${document.getStateName()}`);

document.edit(); // Attempting to edit a published document

const anotherDocument = new Document();
anotherDocument.submitForReview();
anotherDocument.reject();
console.log(`Current state of anotherDocument: ${anotherDocument.getStateName()}`);
