import Search from "@/components/common/Search";

type TrendingSearchProps = {
  placeholder?: string;
  className?: string;
};

const TrendingSearch = ({
  placeholder = "Cari trending news...",
  className = "",
}: TrendingSearchProps) => {
  return (
    <Search placeholder={placeholder} className={className} is_form={false} />
  );
};

export default TrendingSearch;
