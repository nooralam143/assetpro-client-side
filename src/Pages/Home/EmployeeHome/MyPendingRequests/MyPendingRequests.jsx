import useAssetRequest from '../../../../Hooks/useAssetRequest';

const MyPendingRequests = () => {
    const {myRequestAsset}=useAssetRequest();
    const myPendingRequest = myRequestAsset.filter((req) => req.requestStatus==="pending")
    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-3xl">My Pending Requests:</h2>
            <p className="text-4xl font-black">{myPendingRequest.length}</p>
        </div>
    );
};

export default MyPendingRequests;