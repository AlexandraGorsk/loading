import React from 'react';

import styled from 'styled-components';
import { getPosts } from '../../api/posts.js';
import Spinner from '../../components/Spinner/Spinner.js';
import Button from '../../components/Button/Button.js';
import Post from '../../components/Post';

const PostsWrapper = styled('section')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;

class Posts extends React.Component {
	state = { posts: [], loading: false, error: null, amount: 4 };
	componentDidMount() {
		this.setState({ loading: true });
		getPosts()
			.then((posts) => {
				this.setState({ posts: posts, loading: false });
				console.log(posts);
			})
			.catch((err) => {
				this.setState({ loading: false, error: true });

				console.log(err);
			});
	}
  handleChangeAmount =()=>{
    this.setState({amount:this.state.amount+4})
  }
	render() {
		const { posts, loading, error ,amount} = this.state;
		const list = posts.map((post) => <Post key={post.id} {...post} />).slice(0,amount);
		return (
			<>
				{error && <div>Oшибка</div>}
				{loading ? (
					<Spinner />
				) : (
					<PostsWrapper>
						{list}
						<Button onChangeAmount={this.handleChangeAmount} />
					</PostsWrapper>
				)}
			</>
		);
	}
}

export default Posts;
