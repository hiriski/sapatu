import React from 'react';
import PropTypes from 'prop-types';

class LoginGoogle extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {},
  };

  static get propTypes() {
    return {
      children: PropTypes.any,
      location: PropTypes.object,
    };
  }

  componentDidMount() {
    fetch(
      `http://apisapatu.riski.me/auth/google/callback${this.props.location.search}`,
      {
        headers: new Headers({ accept: 'application/json' }),
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong!');
      })
      .then((data) => {
        this.setState({ loading: false, data });
      })
      .catch((error) => {
        this.setState({ loading: false, error });
        console.error(error);
      });
  }

  render() {
    const { loading, error, data } = this.state;
    if (loading) {
      return <div>Loading....</div>;
    }

    if (error) {
      return (
        <div>
          <div>
            <p>Error:</p>
            <code className="Code-block">{error.toString()}</code>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div>
          <details>
            <summary>Welcome {data.user.name}</summary>
            <p>Here is your info: </p>
            <code className="Code-block">{JSON.stringify(data, null, 2)}</code>
          </details>
        </div>
      </div>
    );
  }
}

export default LoginGoogle;
