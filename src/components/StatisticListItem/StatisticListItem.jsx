import { ListItem, ListItemValue } from './StatisticListItem.styled';
import PropTypes from 'prop-types';

export const StatisticListItem = ({ name, value }) => {
  return (
    <>
      <ListItem>
        {`${name}: `}
        <ListItemValue>{value}</ListItemValue>
      </ListItem>
    </>
  );
};

StatisticListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
