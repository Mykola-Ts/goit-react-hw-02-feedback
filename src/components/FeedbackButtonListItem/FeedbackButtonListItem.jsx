import PropTypes from 'prop-types';
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { FeedbackItem, FeedbackButton } from './FeedbackButtonListItem.styled';

const iconsButton = {
  good: BsEmojiSmile,
  neutral: BsEmojiNeutral,
  bad: BsEmojiFrown,
};

export const FeedbackButtonListItem = ({ option, onLeaveFeedback }) => {
  const IconButton = iconsButton[option];

  return (
    <>
      <FeedbackItem>
        <FeedbackButton option={option} onClick={() => onLeaveFeedback(option)}>
          <IconButton size={20} />
          {option}
        </FeedbackButton>
      </FeedbackItem>
    </>
  );
};

FeedbackButtonListItem.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
