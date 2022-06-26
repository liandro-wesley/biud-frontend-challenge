import React from "react";
import {
  Skeleton,
  Box,
  Fade,
  Typography,
  Tooltip,
  Button,
  Divider,
} from "@mui/material";
import {
  ArrowBack,
  Bookmark,
  AccessTimeFilled,
  Share,
} from "@mui/icons-material";
import { useDetailsContext } from "../../context";
import CustomMuiLink from "@presentation/components/CustomMuiLink";
import readingTime from "@presentation/helpers/readingTime";

const ReadPost: React.FC = () => {
  const { loading, article } = useDetailsContext();
  return (
    <>
      {loading && (
        <Fade in>
          <Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Skeleton
                sx={{ mb: 2 }}
                variant="rectangular"
                width={130}
                animation="wave"
              />
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
                <Skeleton
                  sx={{
                    ml: "auto",
                  }}
                  variant="rectangular"
                  width={40}
                  animation="wave"
                />
              </Box>
              <Skeleton variant="rectangular" height={200} animation="wave" />
            </Box>
          </Box>
        </Fade>
      )}
      {!loading && (
        <Fade in>
          <Box>
            <Box component="header">
              <CustomMuiLink
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#000",
                  textDecoration: "none",
                }}
                to="/"
              >
                <ArrowBack />
                Voltar para o feed
              </CustomMuiLink>
              <Box
                sx={{
                  display: "flex",
                  flexGrow: 1,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Typography variant="overline" color="text.secondary">
                    <Box
                      sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyItems: "center",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <Bookmark />
                      {article.category}
                    </Box>
                  </Typography>
                  <Typography variant="overline" color="text.secondary">
                    <Box
                      sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyItems: "center",
                        alignItems: "center",
                        gap: 0.5,
                      }}
                    >
                      <AccessTimeFilled />
                      {readingTime(article.description)}
                    </Box>
                  </Typography>
                </Box>
                <Tooltip title="Compartilhe com os amigos">
                  <Button color="inherit">
                    <Share />
                  </Button>
                </Tooltip>
              </Box>
              <Divider
                sx={{
                  my: 2,
                }}
              />
            </Box>
            <Box component="main">
              <Typography variant="overline">
                Publicado por: {article.author}
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                }}
                variant="body1"
              >
                {article.description}
              </Typography>
            </Box>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default ReadPost;
