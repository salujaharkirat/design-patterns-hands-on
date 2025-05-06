export interface IDocumentState {
  edit: () => void;
  submitForReview: () => void;
  approve: () => void;
  reject: () => void;
  getCurrentStateName: () => string;
}