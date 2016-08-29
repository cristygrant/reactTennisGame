import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import TennisApp from '../components/TennisApp'
import * as PlayerActions from '../actions'

function mapStateToProps(state) {
  return {
    stateObj: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TennisApp)
