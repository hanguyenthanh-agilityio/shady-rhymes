import { Component, ErrorInfo } from 'react';

// Components
import { Box, Button, Text } from '@chakra-ui/react';

interface State {
  error: Error | ErrorInfo | null;
  hasError: boolean;
}

interface Props {
  children: JSX.Element[] | JSX.Element;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { error: error, hasError: true };
  }

  componentDidCatch(_error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    this.setState({
      error: errorInfo
    });
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Box data-testid="error-boundary">
          <Text>Oops, there is an error!</Text>
          <Button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </Button>
        </Box>
      );
    }

    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
