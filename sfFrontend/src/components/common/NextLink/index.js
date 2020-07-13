import Link from "next/link";

export const NextLink = ({ children, href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
};
