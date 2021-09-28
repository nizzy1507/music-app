import { ButtonWrapper } from './styledComponents';
import { AnchorProps, ButtonProps } from './types';

// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props;

const Button = (props: ButtonProps | AnchorProps) => {
  if (hasHref(props))
    return (
      <ButtonWrapper as="a" {...props}>
        {props.children}
      </ButtonWrapper>
    );

  return (
    <ButtonWrapper disabled={props.isDisabled} {...props}>
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
