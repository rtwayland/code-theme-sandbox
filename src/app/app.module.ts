import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Components
import { AppComponent } from './app.component';
import { ConsoleComponent } from './Components/console/console.component';
import { SelectionControlsComponent } from './Components/selection-controls/selection-controls.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { JavascriptSandboxComponent } from './Components/console/javascript-sandbox/javascript-sandbox.component';
import { HtmlSandboxComponent } from './Components/console/html-sandbox/html-sandbox.component';
import { CssSandboxComponent } from './Components/console/css-sandbox/css-sandbox.component';
import { SassSandboxComponent } from './Components/console/sass-sandbox/sass-sandbox.component';
import { TypescriptSandboxComponent } from './Components/console/typescript-sandbox/typescript-sandbox.component';
// Services
import { ThemeService } from './Services/theme.service';
@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    SelectionControlsComponent,
    NavbarComponent,
    SidebarComponent,
    JavascriptSandboxComponent,
    HtmlSandboxComponent,
    CssSandboxComponent,
    SassSandboxComponent,
    TypescriptSandboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
