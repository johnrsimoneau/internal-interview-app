export class QuestionModel {
    createdAt: string;
    text: string; 
    level: string;
    tags: any[];
    answers = new Answers();
    tech: string;
    _id: string;
}

export class Answers {
    text: string;
    isPreferred: boolean;
}