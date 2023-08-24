import { FeedbackItem, FeedbackButton } from './FeedbackButtonListItem.styled';
import PropTypes from 'prop-types';

export const FeedbackButtonListItem = ({ buttonText, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackItem>
        <FeedbackButton id={buttonText} onClick={onLeaveFeedback}>
          {buttonText}
        </FeedbackButton>
      </FeedbackItem>
    </>
  );
};

FeedbackButtonListItem.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
