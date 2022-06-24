import * as React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

type CustomMuiLinkProps = RouterLinkProps;

const CustomMuiLink = React.forwardRef<any, CustomMuiLinkProps>(
  (props, ref) => <RouterLink ref={ref} {...props} />
);

CustomMuiLink.displayName = "CustomMuiLink";

export default CustomMuiLink;
