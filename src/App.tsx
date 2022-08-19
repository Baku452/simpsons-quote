import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.scss';
import { GridCard } from './components/GridCard';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <h1>Simpson Quote App</h1>
        <GridCard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
