import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepperProps {
  steps: {
    title: string;
    description: string;
    details: string[];
    icon: React.ElementType;
    completed?: boolean;
  }[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = steps.length,
  orientation = 'vertical',
  className
}) => {
  const isHorizontal = orientation === 'horizontal';
  
  return (
    <div className={cn(
      "w-full",
      isHorizontal ? "flex items-start justify-between" : "space-y-8",
      className
    )}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep - 1;
        const isUpcoming = index >= currentStep;
        
        return (
          <div key={index} className={cn(
            "relative",
            isHorizontal ? "flex-1" : "flex items-start gap-6"
          )}>
            {/* Step indicator */}
            <div className={cn(
              "relative flex items-center justify-center",
              isHorizontal ? "mx-auto mb-4" : "flex-shrink-0"
            )}>
              <div className={cn(
                "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                isCompleted 
                  ? "bg-primary border-primary text-white" 
                  : isCurrent
                  ? "bg-primary/10 border-primary text-primary"
                  : "bg-background border-muted-foreground/30 text-muted-foreground"
              )}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <step.icon className="w-6 h-6" />
                )}
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={cn(
                  "absolute",
                  isHorizontal 
                    ? "top-6 left-full w-full h-0.5 -translate-y-1/2" 
                    : "top-12 left-6 w-0.5 h-8 -translate-x-1/2",
                  isCompleted 
                    ? "bg-primary" 
                    : "bg-muted-foreground/30"
                )} />
              )}
            </div>
            
            {/* Step content */}
            <div className={cn(
              "flex-1",
              isHorizontal ? "text-center" : "space-y-2"
            )}>
              <div className={cn(
                "text-sm font-medium text-primary mb-1",
                isHorizontal ? "mx-auto max-w-xs" : ""
              )}>
                Step {index + 1}
              </div>
              
              <h3 className={cn(
                "font-semibold text-lg mb-2",
                isCompleted || isCurrent 
                  ? "text-foreground" 
                  : "text-muted-foreground",
                isHorizontal ? "mx-auto max-w-xs" : ""
              )}>
                {step.title}
              </h3>
              
              <p className={cn(
                "text-muted-foreground mb-4",
                isHorizontal ? "mx-auto max-w-xs text-sm" : ""
              )}>
                {step.description}
              </p>
              
              {!isHorizontal && (
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        isCompleted || isCurrent ? "bg-primary" : "bg-muted-foreground/30"
                      )} />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Stepper };