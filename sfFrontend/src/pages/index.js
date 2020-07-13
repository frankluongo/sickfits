import { NextLink } from "@components/common";

const Home = () => {
  return (
    <div>
      This is the homepage
      <NextLink href="/shop" className="test">
        Shop
      </NextLink>
    </div>
  );
};

export default Home;
