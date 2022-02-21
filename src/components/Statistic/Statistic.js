import PropTypes from 'prop-types'

const Statistic = ({data}) =>{
  return(
  <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
   { data.map(({id, label, percentage})=> (
         <li key = {id} className="item">

         <span className="label">{label}</span>
         <span className="percentage">{percentage}%</span>
         </li>
     ))}
    </ul>
</section>
)
};

Statistic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
}
  

export default Statistic