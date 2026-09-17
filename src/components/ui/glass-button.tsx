import React from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';

export interface GlassButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: 'glass';
}

/**
 * GlassButton
 * Wraps the standard Button component with the restrained .glass-surface treatment.
 * Inherits all padding, typography, sizing, and anchor handling from Button.
 */
export const GlassButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} variant="glass" />;
};
