import type { Document } from "./document";
import type { IDocumentState } from "./document-state";
import { ModerationState } from "./moderation-state";

export class DraftState implements IDocumentState {
  private document: Document;
  
  constructor(document: Document) {
    this.document = document;
    console.log("Document created in draft state.");
  }

  edit() {
    console.log("editing document in draft state");
  }

  submitForReview() {
    console.log("document submitted for review");
    this.document.setState(new ModerationState(this.document));
  }

  approve() {
    console.log("document cannot be approved in draft state");
  }

  reject() {
    console.log("document cannot be rejected in draft state");
  }

  getCurrentStateName(): string {
    return "Draft";
  }
}