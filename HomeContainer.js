import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from './redux/Actions';
import Home from './Home';

function mapStateToProps(state) {
  return {
    Counter: state.dataReducer.counter,
    ResultData: state.dataReducer.resultData,
  };
}

function mapDispatchToProps(dispatch) {
  const mergedActions = Object.assign({}, Actions);
  return bindActionCreators(mergedActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
