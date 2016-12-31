import React from "react"
import _ from "lodash"

import { Card, CardBlock } from "reactstrap"

// TODO if class not needed make functional
class SidePanel extends React.Component {
	render() {
		const { onlineUsers } = this.props

		const onlineUsersCount = onlineUsers ? Object.keys(onlineUsers).length : 0

		return (
			<Card>
				<CardBlock className="responsiveHeight">
					<div className="_strong">Online ({onlineUsersCount})</div>
					{_.map(onlineUsers, (u, i) => (
						<div className="chatUser" key={i}>
							{u}
						</div>
					))}
				</CardBlock>
			</Card>
		)
	}
}

SidePanel.propTypes = {
	onlineUsers: React.PropTypes.object,
}

export default SidePanel
