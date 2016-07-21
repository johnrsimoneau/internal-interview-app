export class QuestionModel {
    constructor(
        // public _id: string,
        public text: string,
        public level: string,
        public tags: any,
        public answer: string,
        public answers?: string[],
        public company?: string,
        public tag?: string
    ) {}
}