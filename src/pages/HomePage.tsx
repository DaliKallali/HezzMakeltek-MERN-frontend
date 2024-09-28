import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "@/components/SearchBar";

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center md:-mt-16 -mt-4">
        <h1 className="md:text-5xl text-2xl font-bold tracking-tight text-purple-600">
          Enjoy a delicious takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingPage" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the HezzMakeltek App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} alt="Download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
