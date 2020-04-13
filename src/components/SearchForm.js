import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
	text-align: center;
	margin-bottom: 2vh;
`;
const SearchBox = styled.input`
	margin-left: 2vw;
	width: 15vw;
	padding: 5px;
`;

export default class SearchForm extends React.Component {

	render() {
        console.log('hell')
		return (
			<Search className="search-form">
				<label htmlFor="search">Search by Name</label>
				<SearchBox
					type="text"
					name="search"
					value={this.props.text}
					onChange={(event) => {
						this.props.updateQuery(event.target.value);
					}}
				/>
			</Search>
		);
	}
}
