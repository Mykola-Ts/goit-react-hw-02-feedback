import { Section } from 'components/Section/Section';
import { FeedbackButtonList } from './FeedbackOptions.styled';
import { FeedbackButtonListItem } from 'components/FeedbackButtonListItem/FeedbackButtonListItem';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackButtonList>
          {options.map(({ value, icon }) => (
            <FeedbackButtonListItem
              key={value}
              buttonText={value}
              onLeaveFeedback={onLeaveFeedback}
              icon={icon}
            />
          ))}
        </FeedbackButtonList>
      </Section>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
