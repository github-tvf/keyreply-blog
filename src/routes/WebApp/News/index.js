import { connect } from 'react-redux';
import NewsView from './components/NewsView';
import {
  getAllBlogs
} from './modules/actions'

const mapDispatchToProps = { 
  getAllBlogs
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  home: state.home,
  news: state.news,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsView);
