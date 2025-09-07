import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';
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
  showStatus?: boolean;
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep = steps.length,
  orientation = 'vertical',
  className,
  showStatus = false,
}) => {
  const isHorizontal = orientation === 'horizontal';

  if (isHorizontal) {
    return (
      <div className={cn('w-full max-w-7xl mx-auto px-4', className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep - 1;

            return (
              <React.Fragment key={index}>
                <div className="relative">
                  {/* Step Card */}
                  <div
                    className={cn(
                      'relative p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg',
                      'bg-gradient-to-br from-background to-background/50',
                      isCompleted
                        ? 'border-primary bg-primary/5 shadow-md'
                        : isCurrent
                        ? 'border-primary bg-primary/10 shadow-md ring-2 ring-primary/20'
                        : 'border-muted-foreground/20 hover:border-muted-foreground/40'
                    )}
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3">
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 bg-background',
                          isCompleted
                            ? 'border-primary text-primary'
                            : isCurrent
                            ? 'border-primary text-primary'
                            : 'border-muted-foreground/30 text-muted-foreground'
                        )}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div
                      className={cn(
                        'w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300',
                        isCompleted
                          ? 'bg-primary text-white'
                          : isCurrent
                          ? 'bg-primary/20 text-primary'
                          : 'bg-muted text-muted-foreground'
                      )}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-8 h-8" />
                      ) : (
                        <step.icon className="w-8 h-8" />
                      )}
                    </div>

                    {/* Content */}
                    <h3
                      className={cn(
                        'font-bold text-lg mb-2 leading-tight',
                        isCompleted || isCurrent
                          ? 'text-foreground'
                          : 'text-muted-foreground'
                      )}
                    >
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {step.details.slice(0, 3).map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                        >
                          <div
                            className={cn(
                              'w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0',
                              isCompleted || isCurrent
                                ? 'bg-primary'
                                : 'bg-muted-foreground/30'
                            )}
                          />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                      {step.details.length > 3 && (
                        <li className="text-xs text-muted-foreground/70 pl-4">
                          +{step.details.length - 3} more
                        </li>
                      )}
                    </ul>

                    {/* Status Indicator */}
                    {showStatus && isCompleted && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}

                    {showStatus && isCurrent && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-primary rounded-full animate-pulse" />
                      </div>
                    )}
                  </div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full flex items-center justify-center border-2 bg-background transition-all duration-300',
                          isCompleted
                            ? 'border-primary text-primary'
                            : 'border-muted-foreground/30 text-muted-foreground/50'
                        )}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }

  // Vertical layout (enhanced)
  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      <div className="space-y-8">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep - 1;

          return (
            <div key={index} className="relative">
              <div
                className={cn(
                  'flex items-start gap-6 p-6 rounded-xl transition-all duration-300',
                  'border-2 bg-gradient-to-r from-background to-background/50',
                  isCompleted
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : isCurrent
                    ? 'border-primary bg-primary/10 shadow-lg ring-2 ring-primary/20'
                    : 'border-muted-foreground/20 hover:border-muted-foreground/40 hover:shadow-md'
                )}
              >
                {/* Step indicator */}
                <div className="relative flex-shrink-0">
                  <div
                    className={cn(
                      'w-16 h-16 rounded-full border-3 flex items-center justify-center transition-all duration-300',
                      isCompleted
                        ? 'bg-primary border-primary text-white shadow-lg'
                        : isCurrent
                        ? 'bg-primary/20 border-primary text-primary shadow-md'
                        : 'bg-background border-muted-foreground/30 text-muted-foreground'
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2">
                    <div
                      className={cn(
                        'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 bg-background',
                        isCompleted || isCurrent
                          ? 'border-primary text-primary'
                          : 'border-muted-foreground/30 text-muted-foreground'
                      )}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-primary">
                      Step {index + 1}
                    </span>
                    {showStatus && isCompleted && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        Completed
                      </span>
                    )}
                    {showStatus && isCurrent && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                        In Progress
                      </span>
                    )}
                  </div>

                  <h3
                    className={cn(
                      'font-bold text-xl mb-3 leading-tight',
                      isCompleted || isCurrent
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-2">
                    {step.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div
                          className={cn(
                            'w-2 h-2 rounded-full flex-shrink-0',
                            isCompleted || isCurrent
                              ? 'bg-primary'
                              : 'bg-muted-foreground/30'
                          )}
                        />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Stepper };
