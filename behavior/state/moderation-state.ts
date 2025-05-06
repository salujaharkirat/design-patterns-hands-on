import type { Document } from "./document";
import type { IDocumentState } from "./document-state";
import { DraftState } from "./draft-state";
import { PublishState } from "./publish-state";

export class ModerationState implements IDocumentState {
  private document: Document;
  
  constructor(document: Document) {
    this.document = document;
    console.log("Document created in moderation state.");
  }

  edit() {
    console.log("document cannot be edited in moderation state");
  }

  submitForReview() {
    console.log("document is already under review")
  }

  approve() {
    console.log("approving document in moderation state");
    this.document.setState(new PublishState(this.document));
  }

  reject() {
    console.log("rejecting document in moderation state");
    this.document.setState(new DraftState(this.document));
  }
  
  getCurrentStateName(): string {
    return "Moderation";
  }
}