import { connect } from 'react-redux';
import AuthenticationView from './components/AuthenticationView';
import {
  doRegister,
  doLogin,
} from './modules/actions'

const mapDispatchToProps = {
  doRegister,
  doLogin,
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationView);
