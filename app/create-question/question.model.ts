export class Question {
    constructor(
        public _id: string,
        public answer: string,
        public answers: string[],
        public tags: string [],
        public text: string,
        public company?: string,
        public tag?: string
    ) {}
}