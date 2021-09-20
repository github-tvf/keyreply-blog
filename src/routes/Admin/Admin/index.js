import { connect } from 'react-redux';
import AdminView from './components/AdminView';
import {
  getBlogByUID,
  deleteBlog,
} from './modules/actions'

const mapDispatchToProps = {
  getBlogByUID,
  deleteBlog,
}
const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  admin: state.admin,
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
