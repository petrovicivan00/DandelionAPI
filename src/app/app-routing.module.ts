import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TokenComponent} from "./components/token/token.component";
import {HistoryComponent} from "./components/history/history.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {TokenGuard} from "./token.guard";

const routes: Routes = [
  {
    path: "",
    component: TokenComponent
  },
  {
    path: "t",
    component: TokenComponent
  },
  {
    path: "ee",
    component: EntityExtractionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "ld",
    component: LanguageDetectionComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "sa",
    component: SentimentAnalysisComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "ts",
    component: TextSimilarityComponent,
    canActivate: [TokenGuard]
  },
  {
    path: "h",
    component: HistoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
