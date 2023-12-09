import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const AddAsset = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedType, setselectedType] = useState("");
    const handleSelectedType = (e) => {
        setselectedType(e.target.value);
    };
    
    const handalAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const productType = selectedType;
        const productQuantity = form.productQuantity.value;
        const myAsset = { productName, productType, productQuantity };
    
        try {
            const response = await axiosPublic.post('/my-assets', myAsset);
    
            if (response.status === 200) {
                toast.success('Asset added successfully');
                form.reset(); // Reset the form
            } else {
                toast.error('Error adding Asset');
            }
        } catch (error) {
            console.error('There was a problem adding the Asset:', error);
        }
    };

    return (
        <div>
           <Helmet>
           <title>AssetPro | Add Asset</title>
           </Helmet>        
            <Card className="max-w-sm mx-auto mt-10 mb-10">
                <form className="flex flex-col gap-4" onSubmit={handalAdd}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="productName" value="Product Name" />
                        </div>
                        <TextInput id="productName"  name="productName" type="text" placeholder="Product Name" required />
                    </div>

                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="productType"  value="Select Product Type" />
                        </div>
                        <Select id="productType" name="productType" value={selectedType}  onChange={handleSelectedType} required>
                            <option>Returnable</option>
                            <option>Non-returnable</option>
                        </Select>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="productQuantity" value="productQuantity" />
                        </div>
                        <TextInput id="productQuantity" name="productQuantity" type="number" placeholder="product Quantity" required />
                    </div>
                    <Button type="submit">Add New Asset</Button>
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

export default AddAsset;