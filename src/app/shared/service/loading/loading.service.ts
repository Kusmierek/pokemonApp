import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  private apiCount: number = 0;
  private isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isLoading: Observable<boolean> = this.isLoadingSubject.asObservable();

  public showLoader(): void {
    if (this.apiCount === 0) {
      this.isLoadingSubject.next(true);
    }
    this.apiCount++;
  }

  public hideLoader(): void {
    this.apiCount--;
    if (this.apiCount === 0) {
      this.isLoadingSubject.next(false);
    }
  }
}
