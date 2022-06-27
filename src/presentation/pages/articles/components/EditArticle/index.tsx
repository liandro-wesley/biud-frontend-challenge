import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { GetArticlesByAuthorResult } from "@data/models/get-articles-by-author-result";
import { Button, MenuItem } from "@mui/material";
import { GetAllCategoriesModel } from "@domain/models/get-all-categories-model";
import { useFragmentStack } from "@presentation/components/FragmentStack/contex";

type EditArticleProps = GetArticlesByAuthorResult & GetAllCategoriesModel;

const EditArticle: React.FC<EditArticleProps> = ({
  category,
  description,
  slug,
  title,
  categories,
}) => {
  const { setFragmentStack } = useFragmentStack();
  const [editTitle, setEditTitle] = React.useState({
    value: title,
    error: false,
  });

  const [editSlug, setEditSlug] = React.useState({
    value: slug,
    error: false,
  });

  const [editDescription, setEditDescription] = React.useState({
    value: description,
    error: false,
  });

  const [editCategory, setEditCategory] = React.useState({
    value: category,
    error: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("asdasdasd");
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <TextField
        sx={{
          width: "100%",
        }}
        required
        label="Título"
        value={editTitle.value}
        onChange={({ target }) => {
          setEditTitle({
            value: target.value,
            error: false,
          });
          setEditSlug({
            value: target.value.toLowerCase().replaceAll(" ", "-"),
            error: false,
          });
        }}
        error={editTitle.error}
        helperText="Edite o título da publicação"
      />
      <TextField
        required
        label="Slug"
        disabled
        value={editSlug.value}
        helperText="slug da publicação"
      />
      <TextField
        required
        label="Descrição"
        helperText="Edite o corpo da sua publicação"
        multiline
        value={editDescription.value}
        onChange={({ target }) => {
          setEditDescription({
            value: target.value,
            error: false,
          });
        }}
      />
      <TextField
        label="Categoria"
        helperText="Edite a categoria da sua publicação"
        select
        required
        value={editCategory.value}
        defaultValue={editCategory.value}
        variant="outlined"
        onChange={({ target }) => {
          setEditCategory({
            value: target.value,
            error: false,
          });
        }}
      >
        {categories.map((option) => (
          <MenuItem key={option._id} value={option.title}>
            {option.title}
          </MenuItem>
        ))}
      </TextField>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "100%",
        }}
      >
        <Button
          fullWidth
          type="reset"
          variant="contained"
          color="error"
          onClick={() =>
            setFragmentStack({
              open: false,
              render: null,
            })
          }
        >
          Cancelar
        </Button>
        <Button fullWidth type="submit" variant="contained">
          Atualizar
        </Button>
      </Box>
    </Box>
  );
};

export default EditArticle;
