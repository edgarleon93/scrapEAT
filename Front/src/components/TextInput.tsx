import { useState, useRef, FormEvent, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { gql, useMutation } from "@apollo/client";

const SCRAPE_RECIPE = gql`
  mutation ScrapeRecipe($url: String!) {
    scrapeRecipe(url: $url) {
      title
      ingredients
      ustensiles
      steps
    }
  }
`;

function TextInput() {
  const textFieldRef = useRef<HTMLInputElement>(null);

  const [url, setUrl] = useState("");
  const [scrapeRecipe, { data, loading, error }] = useMutation(SCRAPE_RECIPE);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await scrapeRecipe({
      variables: { url: textFieldRef.current?.value || "" },
    });
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
      <Box>
        <form onSubmit={handleSubmit}>
          <Box sx={{ align: "center", display: "flex", mt: 10, px: 5, mb: 10 }}>
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
            <Box
              sx={{
                background: `url(../pu)`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
          </Box>
        </form>
      </Box>
      {loading && <p className="text-center">Loading...</p>}
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
      {data && (
        <Box sx={{ mt: 5 }}>
          <Box
            sx={{
              backgroundColor: "transparent",
              backdropFilter: "blur(8px)",
              position: "sticky",
              top: "85px",
              zIndex: 1,
              px: 5,
            }}
          >
            <Typography
              sx={{ align: "center", display: "flex", mb: 3 }}
              variant="h2"
            >
              {data.scrapeRecipe.title} recipes
            </Typography>
          </Box>
          <Typography
            sx={{ align: "center", display: "flex", px: 5, mt: 3 }}
            variant="h3"
          >
            Ingrédients:
          </Typography>
          <List>
            {data.scrapeRecipe.ingredients.map(
              (ingredient: string, index: number) => (
                <ListItem
                  sx={{
                    align: "center",
                    display: "flex",
                    px: 8,
                  }}
                  key={index}
                >
                  <ListItemText secondary={ingredient} />
                </ListItem>
              )
            )}
          </List>
          <Typography
            sx={{ align: "center", display: "flex", px: 5, mt: 3 }}
            variant="h3"
          >
            Ustensiles:
          </Typography>
          <List>
            {data.scrapeRecipe.ustensiles.map(
              (ustensile: string, index: number) => (
                <ListItem
                  sx={{ align: "center", display: "flex", px: 8 }}
                  key={index}
                >
                  <ListItemText secondary={ustensile} />
                </ListItem>
              )
            )}
          </List>
          <Typography
            sx={{ align: "center", display: "flex", px: 5, mt: 3 }}
            variant="h3"
          >
            Étapes:
          </Typography>
          <List>
            {data.scrapeRecipe.steps.map((step: string, index: number) => (
              <ListItem
                sx={{ align: "center", display: "flex", px: 8, mb: 3 }}
                key={index}
              >
                <ListItemText secondary={step} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
}

export default TextInput;
