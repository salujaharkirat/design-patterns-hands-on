import type { Document } from "./document";
import type { IDocumentState } from "./document-state";

export class PublishState implements IDocumentState {
  private document: Document;
  
  constructor(document: Document) {
    this.document = document;
    console.log("Document created in publish state.");
  }

  edit() {
    console.log("cannot edit published document");
  }

  submitForReview() {
    console.log("cannot submit for review published document");
  }

  approve() {
    console.log("cannot reject approved document");
  }

  reject() {
    console.log("cannot reject published document");
  }


  getCurrentStateName(): string {
    return "Publish";
  }
}