import { provideRouter, RouterConfig }  from '@angular/router';

import { QuestionListComponent } from './question-list/question-list.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'question-list', terminal: true },
    { path: 'question-list', component: QuestionListComponent },
    { path: 'create-question', component: CreateQuestionComponent },
    { path: 'create-question/:id', component: CreateQuestionComponent },
    { path: 'playground', component: PlaygroundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];