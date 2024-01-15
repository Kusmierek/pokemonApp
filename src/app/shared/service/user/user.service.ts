import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, of } from "rxjs";
import { environment } from "src/app/environment/environment.prod";
import { Register } from "../../types/user/registration";
import { UserCredentials } from "../../types/user/user";
import { UserState } from "../../types/user/userState";
import { Store } from "@ngrx/store";
import { selectUser } from "src/app/store/user/user.selector";
import { NavigationService } from "../navigation/navigation.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl: string = environment.baseUrl;
  private registerLink: string = "/api/User/register";
  private loginLink: string = "/login";
  private httpOptions: {
    headers: HttpHeaders;
  } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  private user: Observable<UserState> = this.store.select(selectUser);

  public constructor(
    private http: HttpClient,
    private store: Store,
    private navigation: NavigationService
  ) {}

  public register(user: Register): Observable<Register> {
    const body: string = JSON.stringify(user);

    return this.http
      .post<Register>(this.baseUrl + this.registerLink, body, this.httpOptions)
      .pipe(catchError(this.handleError<Register>()));
  }

  public login(user: UserCredentials): Observable<Omit<UserState, "isLogged">> {
    const body: string = JSON.stringify(user);

    return this.http
      .post<Omit<UserState, "isLogged">>(
        this.baseUrl + this.loginLink,
        body,
        this.httpOptions
      )
      .pipe(
        tap(() => {
          this.saveToLocalStorage();
          this.navigation.navigateToMain();
        })
      );
  }

  private saveToLocalStorage(): void {
    this.user.subscribe((data: UserState) => {
      const userState: UserState = {
        ...data,
        isLogged: true,
      };

      const transformedUserState: string = JSON.stringify(userState);
      localStorage.setItem("user", transformedUserState);
    });
  }

  public removeLocalStorage(): void {
    localStorage.removeItem("user");
  }

  private handleError<T>(result?: T) {
    return (): Observable<T> => {
      return of(result as T);
    };
  }
}
