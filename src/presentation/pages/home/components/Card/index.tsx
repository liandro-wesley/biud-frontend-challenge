import React from "react";
import {
  Card as Container,
  CardActionArea,
  CardContent,
  Link,
  Typography,
  Box,
  Fade,
  Button,
  CardActions,
} from "@mui/material";
import { Bookmark, AccessTimeFilled, Share } from "@mui/icons-material";
import { GetAllArticlesResult } from "@data/models/get-all-articles-result";
import CustomMuiLink from "../CustomMuiLink";
import readingTime from "@presentation/helpers/readingTime";

const Card: React.FC<Omit<GetAllArticlesResult, "_id">> = ({
  category,
  description,
  slug,
  author,
  title,
}) => {
  return (
    <Fade in>
      <Container
        sx={{
          maxWidth: "100%",
          mb: 2,
        }}
      >
        <CardActions>
          <Box
            sx={{
              display: { xs: "flex" },
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex" },
                flexGrow: 1,
                gap: 2,
                alignItems: "center",
              }}
            >
              <Typography variant="overline" color="text.secondary">
                <Box
                  sx={{
                    display: { xs: "flex" },
                    flexGrow: 1,
                    justifyItems: "center",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <Bookmark />
                  {category}
                </Box>
              </Typography>
              <Typography variant="overline" color="text.secondary">
                <Box
                  sx={{
                    display: { xs: "flex" },
                    flexGrow: 1,
                    justifyItems: "center",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  <AccessTimeFilled />
                  {readingTime(description)}
                </Box>
              </Typography>
            </Box>
            <Button color="inherit">
              <Share />
            </Button>
          </Box>
        </CardActions>
        <CardActionArea>
          <Link
            sx={{
              textDecoration: "none",
              color: "#000",
            }}
            component={CustomMuiLink}
            to={`/details/${slug}`}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Container>
    </Fade>
  );
};

export default Card;
