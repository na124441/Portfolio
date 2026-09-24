import React from 'react';
import type { Metadata } from 'next';
import { QuestionBankPage } from '@/components/bytelogic/question-bank/QuestionBankPage';

export const metadata: Metadata = {
  title: 'Question Bank — ByteLogic | ML Hands-On Problem Set',
  description:
    'An interactive 20-topic machine learning problem set covering regression, classification, model evaluation, and unsupervised learning with 5 difficulty tiers and real-world datasets.',
  keywords: [
    'ByteLogic Question Bank',
    'Machine Learning Problems',
    'Linear Regression Practice',
    'Classification Problem Set',
    'Model Evaluation Metrics',
    'Unsupervised Learning Practice',
    'ML Hands-On',
    'Kaggle Datasets',
  ],
};

export default function ByteLogicQuestionBankPage() {
  return (
    <div className="min-h-screen bg-[#05070A] pt-20 sm:pt-24 md:pt-28 pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <QuestionBankPage />
    </div>
  );
}
