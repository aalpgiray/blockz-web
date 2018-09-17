import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { incrementCounter } from './store/actions/counter-actions';
import { IStore } from './store/reducers';

interface IStateProps {
  count: number;
}

interface IDispatchProps {
  onClick: () => void;
}

interface IProps extends IStateProps, IDispatchProps {}

class StatefulComponent extends Component<IProps> {
  public state = {
    count: 0
  };
  public render() {
    return (
      <div>
        <h2>
          Count:
          {this.props.count}
        </h2>
        <button onClick={this.onclick}>Add</button>
      </div>
    );
  }
  private onclick = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
    this.props.onClick();
  };
}

const mapStateToProps = (state: IStore) => {
  return {
    count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClick: () => dispatch(incrementCounter())
});

export default connect<IStateProps, IDispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(StatefulComponent);
