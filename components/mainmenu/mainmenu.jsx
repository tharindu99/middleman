import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Visualization'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          
          {/* <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu> */}
        </Menu>

      </div>
    )
  }
}
