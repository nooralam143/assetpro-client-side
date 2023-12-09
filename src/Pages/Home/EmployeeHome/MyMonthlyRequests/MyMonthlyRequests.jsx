import  { useEffect, useState } from "react";
import useAssetRequest from '../../../../Hooks/useAssetRequest';

const MyMonthlyRequests = () => {
  const { myRequestAsset } = useAssetRequest();
  const [MonthRequestAsset, setMonthRequestAsset] = useState([]);

  useEffect(() => {
    const today = new Date();

    // get birthday month user data
    const thisMonthRequest = myRequestAsset.filter((req) => {
      const thisMonthAssetRequest = new Date(req.assetRequestDateString);
      return thisMonthAssetRequest.getMonth() === today.getMonth();
    });

    setMonthRequestAsset(thisMonthRequest);
  }, [myRequestAsset]);

  console.log("Asset Request is", myRequestAsset);

  return (
       <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl">My Month Requests:</h2>
            <p className="text-4xl font-black">{MonthRequestAsset.length}</p>
        </div>
  );
};

export default MyMonthlyRequests;
