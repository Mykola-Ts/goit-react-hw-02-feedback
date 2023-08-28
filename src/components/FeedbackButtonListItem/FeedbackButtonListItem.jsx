import { FeedbackItem, FeedbackButton } from './FeedbackButtonListItem.styled';
import PropTypes from 'prop-types';

export const FeedbackButtonListItem = ({
  buttonText,
  onLeaveFeedback,
  icon,
}) => {
  const IconButton = icon;

  return (
    <>
      <FeedbackItem>
        <FeedbackButton
          id={buttonText}
          onClick={evt => onLeaveFeedback(evt.currentTarget.id)}
        >
          <IconButton size={20} />
          {buttonText}
        </FeedbackButton>
      </FeedbackItem>
    </>
  );
};

FeedbackButtonListItem.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  icon: PropTypes.func.isRequired,
};
