import PropTypes from 'prop-types';
import { NotificationText } from './Notification.styled';

export const Notification = ({ text }) => {
  return (
    <>
      <NotificationText>{text}</NotificationText>
    </>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
