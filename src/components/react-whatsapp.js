import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

class WhatsApp extends Component {

	render() {
		return (
			<div id="whatsapp">
				<a href={"https://api.whatsapp.com/send?phone=" + this.props.tel + "&text=" + this.props.text + "&source=" + this.props.source + "&data=" + this.props.data} target="_blank">
					<div>
						<i class="fab fa-whatsapp fa-2x">{this.props.defaultText}</i>
					</div>
				</a>
			</div>
		)
		}

}

WhatsApp.propTypes = {
	tel: PropTypes.string.isRequired,
	text: PropTypes.string,
	source: PropTypes.string,
	data: PropTypes.string,
	defaultText: PropTypes.string
}

// ------------------------------------------------------------------------------------

export {
  WhatsApp
}