import React from 'react';
import spin from '../../assets/spinner-gif-17.gif';
import styled from 'styled-components';

const Spinn = styled('div')`
	margin: auto;
	height: 50px;
	width: 50px;
`;
const Spinner = () => {
	return (
		<Spinn>
			<img src={spin} alt={'spin'} />
		</Spinn>
	);
};
export default Spinner;
