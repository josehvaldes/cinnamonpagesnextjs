import Hero from "./Hero";
import NewArrivals from "./NewArrivals";
import OnSales from "./OnSales";
import TrendingProducts from "./TrendingProducts";

type HomeProps = {
   healthStatus: string;
   newArrivals: any[];
   trendings: any[];
   onSales: any[];
};

const Home = ({ healthStatus, newArrivals, trendings, onSales }: HomeProps) => {

   return (
    <>
       <Hero />
       <NewArrivals newArrivals={newArrivals} />
       <TrendingProducts trendings={trendings} />
       <OnSales onSales={onSales} />

       <div className="w-full flex justify-end p-4">
          <p className="text-xs text-gray-500">API Status: {healthStatus}</p>
       </div>
    </>
    );
}

export default Home;