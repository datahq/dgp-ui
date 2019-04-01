import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatasetListComponent } from './dataset-list/dataset-list.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { StepsComponent } from './steps/steps.component';
import { StepExtractComponent } from './step-extract/step-extract.component';
import { StepMappingComponent } from './step-mapping/step-mapping.component';
import { StepEnrichComponent } from './step-enrich/step-enrich.component';
import { StepPublishComponent } from './step-publish/step-publish.component';
import { ResultsComponent } from './results/results.component';
import { ResultTabsComponent } from './result-tabs/result-tabs.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { StepTabsComponent } from './step-tabs/step-tabs.component';
import { StepExtractSourceComponent } from './step-extract-source/step-extract-source.component';
import { StepExtractStructureComponent } from './step-extract-structure/step-extract-structure.component';
import { StepMappingFieldComponent } from './step-mapping-field/step-mapping-field.component';
import { ExtendableKeyvalueListComponent } from './extendable-keyvalue-list/extendable-keyvalue-list.component';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { DatasetItemComponent } from './dataset-item/dataset-item.component';
import { FailureMarqueeComponent } from './failure-marquee/failure-marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DatasetListComponent,
    LogoComponent,
    FooterComponent,
    WorkspaceComponent,
    StepsComponent,
    StepExtractComponent,
    StepMappingComponent,
    StepEnrichComponent,
    StepPublishComponent,
    ResultsComponent,
    ResultTabsComponent,
    ResultTableComponent,
    StepTabsComponent,
    StepExtractSourceComponent,
    StepExtractStructureComponent,
    StepMappingFieldComponent,
    ExtendableKeyvalueListComponent,
    ConfigurationsComponent,
    DatasetItemComponent,
    FailureMarqueeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
