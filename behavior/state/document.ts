import type { IDocumentState } from "./document-state";
import { DraftState } from "./draft-state";

export class Document {
  private currentState: IDocumentState;

  constructor() {
    this.currentState = new DraftState(this);
  }

  setState(documentState: IDocumentState) {
    this.currentState = documentState;
  }

  edit(): void {
    this.currentState.edit();
  }

  submitForReview(): void {
    this.currentState.submitForReview();
  }

  approve(): void {
    this.currentState.approve();
  }

  reject(): void {
    this.currentState.reject();
  }

  getStateName(): string {
    return this.currentState.getCurrentStateName();
  }

}