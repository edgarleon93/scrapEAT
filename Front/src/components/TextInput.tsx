import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { gql, useLazyQuery } from "@apollo/client";

function TextInput() {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const SCRAPE_MARMITON_RECIPE = gql`
    query ScrapeMarmitonRecipe($url: String!) {
      scrapeMarmitonRecipe(url: $url) {
        title
        ingredients
        steps
        ustensiles
      }
    }
  `;
  const [scrapeMarmitonRecipe, { data, error }] = useLazyQuery(
    SCRAPE_MARMITON_RECIPE
  );
  const [url, setUrl] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputUrl = textFieldRef.current?.value || "";
    console.log("handleSubmit called, input URL:", inputUrl);
    setUrl(inputUrl);
    scrapeMarmitonRecipe({ variables: { url: inputUrl } });
  };
  useEffect(() => {
    if (data) {
      console.log("Data received:", data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error("Error in GraphQL query:", error);
    }
  }, [error]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box sx={{ align: "center", display: "flex", mt: 10, px: 5 }}>
          <TextField
            inputRef={textFieldRef}
            fullWidth
            id="standard-primary"
            placeholder="https://www/..."
            variant="filled"
            size="small"
            color="primary"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "primary.main",
              borderRadius: "4px",
              filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.3))",

              ":hover ": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
                backgroundColor: "primary.main",
              },
            }}
          >
            <Typography sx={{ color: "secondary.main" }}>Submit</Typography>
          </Button>
        </Box>
      </form>
      {data && data.scrapeMarmitonRecipe && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6">
            Titre: {data.scrapeMarmitonRecipe.title}
          </Typography>
          <Typography variant="h6">Ingrédients:</Typography>
          <List>
            {data.scrapeMarmitonRecipe.ingredients.map(
              (ingredient: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText primary={ingredient} />
                </ListItem>
              )
            )}
          </List>
          <Typography variant="h6">Étapes:</Typography>
          <List>
            {data.scrapeMarmitonRecipe.steps.map(
              (step: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText primary={step} />
                </ListItem>
              )
            )}
          </List>
          <Typography variant="h6">Ustensiles:</Typography>
          <List>
            {data.scrapeMarmitonRecipe.ustensiles.map(
              (ustensile: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText primary={ustensile} />
                </ListItem>
              )
            )}
          </List>
        </Box>
      )}
      {error && (
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" color="error" sx={{ color: "primary.main" }}>
            Une erreur s'est produite lors de la récupération des données.
          </Typography>
          <Typography variant="body1" color="error">
            {error.message}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default TextInput;
