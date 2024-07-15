import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import { Suggestion } from "../../types/SuggesionsResponse";

interface SuggestionsProps {
  suggestions: string | undefined;
  loading: boolean;
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, loading }) => {
  if (loading) {
    return (
      <Box p={2}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4">Suggestions</Typography>
      {suggestions !== undefined && (
        <Box p={5} pt={2} mb={2} boxShadow={3}>
          <ReactMarkdown>{suggestions}</ReactMarkdown>
        </Box>
      )}
    </Box>
  );
};

export default Suggestions;
