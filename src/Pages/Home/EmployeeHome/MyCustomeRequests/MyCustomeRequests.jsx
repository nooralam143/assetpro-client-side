import useAssetRequest from '../../../../Hooks/useAssetRequest';


const MyCustomeRequests = () => {
    const {myRequestAsset}=useAssetRequest();
    console.log("my asset request is",myRequestAsset);

    return (
         <div className="flex flex-col justify-center items-center">
         <h2 className="text-3xl"> My Custome Requests:</h2>
         <p className="text-4xl font-black">{myRequestAsset.length}</p>
     </div>
    );
};

export default MyCustomeRequests;