export interface Survey {
    id: number;
    title: string;
    description: string;
    questions: string[];
}

export interface Answer {
    [question: string]: string; //key = question, value = answer
}