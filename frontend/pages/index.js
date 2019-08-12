import Items from '../components/Items';
//import SingleItem from '../components/SingleItem';

const Home = props => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;