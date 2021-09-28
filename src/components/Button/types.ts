export type CommonProps = {
  variant?: 'filled' | 'ghost' | 'neutral';
  color?: 'primary' | 'secondary';
  isDisabled?: boolean;
  children?: React.ReactNode;
};

// Button props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    href?: undefined;
    type?: 'button' | 'reset' | 'submit';
  };

// Anchor props
export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    href?: string;
  };
