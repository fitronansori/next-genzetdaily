import Search from "@/components/common/Search";

type ArticlesSearchProps = {
  placeholder?: string;
  className?: string;
};

const ArticlesSearch = ({
  placeholder = "Cari artikel yang kamu mau...",
  className = "",
}: ArticlesSearchProps) => {
  return (
    <Search placeholder={placeholder} className={className} is_form={true} />
  );
};

export default ArticlesSearch;
