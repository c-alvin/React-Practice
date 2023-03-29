import React from 'react';
import ReactDOM from 'react-dom';

// export class NewFriend extends React.Component {
//   render() {
//     return (
//       <div>
//         <img src={this.props.src} />
//       </div>
//     );
//   }
// }

export function NewFriend(props) {
  return (
    <div>
      <img src={props.src} />
    </div>
  );
}

// props can be passed down through a component as a parameter accessed by props.propertyName

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);
