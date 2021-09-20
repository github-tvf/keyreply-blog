import { connect } from 'react-redux';
import NewsDetailView from './components/NewsDetailView';
import {
  getBlogByID,
  getRelatedNews,
} from './modules/actions'

const mapDispatchToProps = {
  getBlogByID,
  getRelatedNews,
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  newsDetail: state.newsDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailView);
