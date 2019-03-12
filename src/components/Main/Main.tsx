import * as React from 'react';
import { IMainProps, IMainState } from './IMain';
import * as styles from './Main.module.scss';

export class Main extends React.Component<IMainProps, IMainState> {
  constructor(props: IMainProps, state: IMainState) {
    super(props);
    this.state = {
      ...state
    };
  }

  public render(): JSX.Element {
    return (
      <div className={styles.div}>
        React Boilerplate! Is this a sample? {this.props.sample ? 'Yes' : 'No'}
      </div>
    );
  }
}