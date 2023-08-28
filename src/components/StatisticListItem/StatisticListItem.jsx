import PropTypes from 'prop-types';
import { ListItem, ListItemValue } from './StatisticListItem.styled';

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
