import { writable } from 'svelte/store';
import type { Survey } from './types';

export const surveys = writable<Survey[]>([
    {
        id: 1,
        title: 'Customer Satisfaction Survey',
        description: 'We value your feedback! Please take a moment to complete this survey.',
        questions: [
            'How satisfied are you with our product?',
            'How likely are you to recommend our product to others?',
            'What features do you like the most?',
            'What can we improve?'
        ]
    },
    {
        id: 2,
        title: 'Employee Engagement Survey',
        description: 'Your feedback is important to us. Please share your thoughts about your experience working here.',
        questions: [
            'How satisfied are you with your job?',
            'Do you feel valued at work?',
            'What can we do to improve the workplace environment?',
            'Any additional comments or suggestions?'
        ]
    }
]);

// Store survey answers
export const responses = writable<{ surveyId: number; answers: Record<string, string> }[]>([]);