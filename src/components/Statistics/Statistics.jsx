import PropTypes from 'prop-types';
import { StatisticListItem } from 'components/StatisticListItem/StatisticListItem';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticListItem name="Good" value={good} />
      <StatisticListItem name="Neutral" value={neutral} />
      <StatisticListItem name="Bad" value={bad} />
      <StatisticListItem name="Total" value={total} />
      <StatisticListItem name="Positive feedback" value={positivePercentage} />
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
