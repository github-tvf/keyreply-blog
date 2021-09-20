import { connect } from 'react-redux';
import PostView from './components/PostView';
import {
  doPost,
  getBlogByID,
  editPost,
} from './modules/actions'

const mapDispatchToProps = {
  doPost,
  getBlogByID,
  editPost,
}
const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
