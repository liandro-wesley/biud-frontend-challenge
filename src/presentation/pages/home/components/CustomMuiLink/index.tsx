import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

const CustomMuiLink = React.forwardRef<any, RouterLinkProps>((props, ref) => (
  <RouterLink ref={ref} {...props} />
));

CustomMuiLink.displayName = "CustomMuiLink";

export default CustomMuiLink;
