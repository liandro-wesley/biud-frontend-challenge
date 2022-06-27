import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Tooltip,
} from "@mui/material";
import CustomMuiLink from "@presentation/components/CustomMuiLink";
import { ArrowBack, Delete, Edit } from "@mui/icons-material";
import { useArticles } from "../../contex";
import { useFragmentStack } from "@presentation/components/FragmentStack/contex";
import EditArticle from "../EditArticle";

export default function ArticlesList() {
  const { articles, loading, categories } = useArticles();
  const { setFragmentStack } = useFragmentStack();
  return (
    <Box
      sx={{
        pb: 10,
      }}
    >
      {!loading && (
        <>
          <CustomMuiLink
            style={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: "#000",
              textDecoration: "none",
              marginBottom: "2rem",
            }}
            to="/"
          >
            <ArrowBack />
            Voltar para o feed
          </CustomMuiLink>
          {articles.length > 0 && (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Título</TableCell>
                      <TableCell align="right">Ações</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {articles.map((article) => (
                      <TableRow key={article._id}>
                        <TableCell align="left">{article.title}</TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#717171",
                          }}
                        >
                          <Tooltip title="Editar">
                            <Button
                              color="inherit"
                              size="small"
                              onClick={() =>
                                setFragmentStack({
                                  open: true,
                                  render: (
                                    <EditArticle {...article} {...categories} />
                                  ),
                                })
                              }
                            >
                              <Edit />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Excluir">
                            <Button color="inherit" size="small">
                              <Delete />
                            </Button>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </>
      )}
    </Box>
  );
}
