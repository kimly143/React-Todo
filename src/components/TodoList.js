import React from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
	root: {
		textAlign: 'center'
	},
	doneTodo: {
		textDecoration: 'line-through'
	}
};

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& > *': {
//         margin: theme.spacing(1),
//       },
//     },
//   }));

class TodoList extends React.Component {
	render() {
		return (
			<div className={this.props.classes.root}>
				<h3> Your list: </h3>
				{this.props.todos.map((todo) => (
					<p className={todo.done? this.props.classes.doneTodo : ''} key={todo.id} onClick={() => this.props.markDone(todo.id)}>
						{todo.text}
					</p>
                ))}
                <Button variant="contained" color="primary" onClick={this.props.clearDone}> Clear done </Button>

				{/* <button onClick={this.props.clearDone}> Clear done </button> */}
			</div>
		);
	}
}

export default withStyles(styles)(TodoList);
//build a style container and then render this component(TodoList) in the container
