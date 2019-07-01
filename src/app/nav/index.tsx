import * as React from 'react';
import './nav.scss';
import { NodeDropdown } from 'components/node-dropdown';
import { SearchInput } from 'components/search-input';
import { NavLink } from 'react-router-dom';
import { OutsideAlerter } from 'components/outside-click';
import { Select } from 'components/node-dropdown/components/select-node';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Logo = () => (
  <img
  width="100"
  height="100"
  src="data:image/png;base64,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"
  />
);

export class Nav extends React.Component {
  public state = {
    open: false
  };

  public toggleDrawer = () => {
    this.setState({ open: !this.state.open });
  };

  public render() {
    const { toggleDrawer } = this;
    const { open } = this.state;
    return (
      <>
        <nav className="Navigation">
          <div className="Navigation-wrapper">
            <button
              className="Navigation-open-drawer"
              onClick={() => this.setState({ open: true })}
            >
              <i className="nc-icon nc-ic_menu_24px size_24px" />
            </button>
            <NavLink to="/" className="Navigation-title">
              <Logo />
            </NavLink>
            <div className="flex-spacer" />
            <SearchInput />
            <div className="flex-spacer" />
            <NodeDropdown />
          </div>
        </nav>
        <TransitionGroup>
          {open && (
            <CSSTransition classNames="Navigation-Drawer-animation" timeout={200}>
              <aside className="Navigation-Drawer-wrapper">
                <OutsideAlerter onClick={this.toggleDrawer}>
                  <nav className="Navigation-Drawer">
                    <header className="Navigation-Drawer-header">
                      <NavLink to="/" className="Navigation-title" onClick={toggleDrawer}>
                        <Logo />
                      </NavLink>
                    </header>
                    <Select onSelect={toggleDrawer} />
                  </nav>
                </OutsideAlerter>
              </aside>
            </CSSTransition>
          )}
        </TransitionGroup>
      </>
    );
  }
}
