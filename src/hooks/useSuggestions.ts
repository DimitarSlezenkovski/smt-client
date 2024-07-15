import { useState } from 'react';
import { getSuggestions } from '../core/api/starter-api';

export const useSuggestions = () => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (taskDetails: any) => {
    setLoading(true);
    try {
      const data = await getSuggestions(taskDetails);
      setSuggestions(data.suggestions);
    } catch (error) {
      console.error('Failed to fetch suggestions', error);
    } finally {
      setLoading(false);
    }
  };

  return { suggestions, loading, fetchSuggestions };
};
