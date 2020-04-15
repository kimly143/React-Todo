import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

//style using material-ui
const styles = {
	root: {
		textAlign: 'center',
		marginBottom: '2vh'
	},
	searchBox: {
		marginLeft: '2vw',
		width: '20vw',
		padding: '5px'
	}
};

class SearchForm extends React.Component {
	render() {
		//console.log('hello');
		return (
			<div className={this.props.classes.root}>
				<TextField className={this.props.classes.searchBox} //using material-ui for textfield
                    label="Search by Name"
					name="search"
					value={this.props.text}
					onChange={(event) => {
						this.props.updateQuery(event.target.value);
					}}
				/>
			</div>
		);
	}
}

export default withStyles(styles)(SearchForm);