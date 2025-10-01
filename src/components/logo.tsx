'use client';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export function Logo({ size = 'md', iconSize = 'md', showText = true, variant = 'dark' }: LogoProps) {
  const iconSizeClasses = {
    sm: 'h-8 w-8 max-h-8 max-w-8',
    md: 'h-10 w-10 max-h-10 max-w-10',
    lg: 'h-12 w-12 max-h-12 max-w-12',
    xl: 'h-16 w-16 max-h-16 max-w-16'
  };

  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  const textColors = {
    dark: 'text-gray-900',
    light: 'text-white'
  };

  const subTextColors = {
    dark: 'text-gray-600',
    light: 'text-gray-300'
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Eagle Logo */}
      <div className={`${iconSizeClasses[iconSize]} flex items-center justify-center flex-shrink-0`}>
        <img
          src="/eagle-logo.svg"
          alt="Daniel Risk Intelligence Logo"
          className={`w-full h-full object-contain ${variant === 'light' ? 'brightness-0 invert' : ''} max-w-full`}
          style={{ maxHeight: '100%' }}
        />
      </div>
      
      {/* Company Name */}
      {showText && (
        <div>
          <h1 className={`${textSizes[size]} font-bold ${textColors[variant]} leading-tight`}>
            Daniel Risk Intelligence
          </h1>
        </div>
      )}
    </div>
  );
}