import PriceCard from "./PriceCard";

const Package = () => {
    return (
<div>
   <div className="pt-5">
   <h2 className="text-5xl text-[#91C840] text-center font-bold">Ready to get started?</h2>
    <p className="text-2xl text-center font-bold">Choose a plan as per your needs</p>
   </div>
<div className="flex justify-center gap-3 mt-5 flex-col items-center md:flex-row lg:flex-row">
            <PriceCard title="Basic" price="$5" features={['5 Member', 'Feature 2', 'Feature 3']} />  
            <PriceCard title="Standard" price="$8" features={['10 Member', 'Additional Feature 1', 'Additional Feature 2']} />
            <PriceCard title="Premium" price="$15" features={['20 Member', 'Premium Feature 1', 'Premium Feature 2']} />
        </div>  
</div>
   
    );
};

export default Package;