import { Button, Card, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../providers/AuthProvider";


const CustomeRequest = () => {
    const axiosPublic = useAxiosPublic();
    const { user} = useContext(AuthContext);
    const requestUser = user.email;
    const [selectedType, setselectedType] = useState("Returnable");
    const handleSelectedType = (e) => {
        setselectedType(e.target.value);
    };

    const handalAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const assetName = form.assetName.value;
        const price = form.price.value;
        const assetType = selectedType;
        const assetImage = form.assetImage.value;
        const whyNeedAsset = form.whyNeedAsset.value;
        assetApproveDate =null;
        const assetRequestDate = new Date();
        const optionsRequestDate = { timeZone: 'Asia/Dhaka' };
        const assetRequestDateString = assetRequestDate.toLocaleString('en-US', optionsRequestDate);
        const requestStatus ="pending";
        const additionalInformation = null;
        const requestAsset = { requestUser, assetName, price, assetType, assetImage, whyNeedAsset, additionalInformation, requestStatus, assetRequestDateString, assetApproveDate };

        try {
            const response = await axiosPublic.post('/request-assets', requestAsset);

            if (response.status === 200) {
                toast.success('Asset Request added successfully');
                form.reset(); // Reset the form
            } else {
                toast.error('Error Asset Request');
            }
        } catch (error) {
            console.error('There was a problem adding the Asset Request:', error);
        }
    };

    return (
        <div>
            <Helmet>
                <title>AssetPro | Custome Request</title>
            </Helmet>
            <Card className="max-w-sm mx-auto mt-10 mb-10">
                <form className="flex flex-col gap-4" onSubmit={handalAdd}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="assetName" value="Asset Name" />
                        </div>
                        <TextInput id="assetName" name="assetName" type="text" placeholder="Asset Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Price" />
                        </div>
                        <TextInput id="price" name="price" type="number" placeholder="price" required />
                    </div>

                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="AssetType" value="Select Asset Type" />
                        </div>
                        <Select id="AssetType" name="AssetType" value={selectedType} onChange={handleSelectedType} required>
                            <option>Returnable</option>
                            <option>Non-returnable</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="assetImage" value="Asset image URL" />
                        </div>
                        <TextInput id="assetImage" name="assetImage" type="text" placeholder="Asset image URL" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="whyNeedAsset" value="Why you Need This" />
                        </div>
                        <Textarea id="whyNeedAsset" name="whyNeedAsset" placeholder="Why you Need This" required rows={4} />
                    </div>
                    <Button type="submit">Request Asset</Button>
                </form>
            </Card>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default CustomeRequest;