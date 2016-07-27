import { provideRouter, RouterConfig }  from '@angular/router';

import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './create-edit-question/question.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'question-list', terminal: true },
    { path: 'question-list', component: QuestionListComponent },
    { path: 'question', component: QuestionComponent },
    { path: 'question/:id', component: QuestionComponent },
    { path: 'playground', component: PlaygroundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];