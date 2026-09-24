'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuestionBankQuestion } from '@/types/question-bank';

export interface QuestionItemProps {
  question: QuestionBankQuestion;
  questionKey: string;
  isChecked: boolean;
  onToggle: () => void;
}

export function QuestionItem({
  question,
  isChecked,
  onToggle,
}: QuestionItemProps) {
  return (
    <div
      role="checkbox"
      aria-checked={isChecked}
      tabIndex={0}
      className={cn(
        'group flex items-start gap-3 p-3 rounded-[6px] border border-transparent transition-all cursor-pointer select-none',
        'hover:bg-[#111A22] hover:border-[#1C2830]',
        isChecked && 'bg-[#0A0F14]/60'
      )}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div
        className={cn(
          'w-5 h-5 rounded-[4px] flex items-center justify-center border transition-all mt-0.5 shrink-0',
          isChecked
            ? 'bg-[#019AA2] border-[#019AA2] text-[#05070A]'
            : 'border-[#1C2830] bg-[#070B0E] group-hover:border-[#019AA2]/60'
        )}
      >
        <Check
          className={cn(
            'w-3.5 h-3.5 stroke-[3] transition-all',
            isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          )}
        />
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p
          className={cn(
            'text-sm font-sans leading-relaxed transition-all duration-200',
            isChecked ? 'line-through text-[#68747D]' : 'text-[#F3F6F7]'
          )}
        >
          {question.text}
        </p>
      </div>
    </div>
  );
}

export default QuestionItem;
