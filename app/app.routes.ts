import { provideRouter, RouterConfig }  from '@angular/router';

import { QuestionListComponent } from './existing-questions/existing-questions.component';
import { QuestionComponent } from './create-edit-question/question.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'existing-questions', terminal: true },
    { path: 'existing-questions', component: QuestionListComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'question/:id', component: QuestionComponent },
    { path: 'playground', component: PlaygroundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];