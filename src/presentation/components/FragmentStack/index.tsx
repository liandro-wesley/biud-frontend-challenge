import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useFragmentStack } from "./contex";

type Anchor = "bottom";

export default function FragmenStack() {
  const { fragmentStack, setFragmentStack } = useFragmentStack();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setFragmentStack({
        open,
        render: null,
      });
    };

  return (
    <div>
      <>
        <Drawer
          anchor="bottom"
          open={fragmentStack.open}
          onClose={toggleDrawer("bottom", false)}
        >
          <Box
            sx={{
              minHeight: "calc(100vh - 30vh)",
              margin: "0 auto",
              width: "100%",
              py: 5,
              paddingLeft: 2,
              paddingRight: 2,
            }}
            maxWidth="md"
          >
            {fragmentStack.render}
          </Box>
        </Drawer>
      </>
    </div>
  );
}
