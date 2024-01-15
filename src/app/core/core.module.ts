import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { interceptorsProviders } from "./interceptors/interceptors.providers";
import { MessageService } from "primeng/api";
import { MessageModule } from "primeng/message";
import { ToastModule } from "primeng/toast";

@NgModule({
  declarations: [],
  imports: [CommonModule, MessageModule, ToastModule],
  providers: [...interceptorsProviders, MessageService],
})
export class CoreModule {}
