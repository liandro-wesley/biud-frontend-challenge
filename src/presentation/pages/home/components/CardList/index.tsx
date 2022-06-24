import React from "react";
import { useHomeContext } from "../../context";
import { Skeleton, Box, Fade } from "@mui/material";
import { InsertPageBreak } from "@mui/icons-material";
import Card from "../Card";

const CardList: React.FC = () => {
  const { loading, articles } = useHomeContext();
  return (
    <Box>
      {loading && (
        <Fade in>
          <Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
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
              <Skeleton variant="rectangular" height={100} animation="wave" />
            </Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
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
              <Skeleton variant="rectangular" height={100} animation="wave" />
            </Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
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
              <Skeleton variant="rectangular" height={100} animation="wave" />
            </Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
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
              <Skeleton variant="rectangular" height={100} animation="wave" />
            </Box>
            <Box sx={{ width: "100%", mb: 5 }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex" },
                  gap: 1,
                  mb: 1,
                }}
              >
                <Skeleton variant="rectangular" width={130} animation="wave" />
                <Skeleton variant="rectangular" width={80} animation="wave" />
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
              <Skeleton variant="rectangular" height={100} animation="wave" />
            </Box>
          </Box>
        </Fade>
      )}
      {!loading && (
        <>
          {articles.length === 0 && (
            <Box>
              <InsertPageBreak />
            </Box>
          )}
          {articles.length > 0 && (
            <>
              {articles.map((article) => (
                <Card
                  key={article._id}
                  title={article.title}
                  category={article.category}
                  description={article.description}
                  slug={article.slug}
                  author={article.author}
                />
              ))}
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default CardList;
