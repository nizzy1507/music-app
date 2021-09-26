import { QueryClient, QueryClientProvider } from 'react-query';

import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
    </QueryClientProvider>
  );
}

export default App;
