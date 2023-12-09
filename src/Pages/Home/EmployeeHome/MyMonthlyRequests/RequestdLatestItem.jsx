
import DataTable from 'react-data-table-component';
import useAssetRequest from '../../../../Hooks/useAssetRequest';

const RequestLatestItem = () => {
  const { myRequestAsset } = useAssetRequest();

  // Sort assets based on assetRequestDateString in descending order
  const sortedData = myRequestAsset
    .sort((a, b) => new Date(b.assetRequestDateString) - new Date(a.assetRequestDateString))
    .slice(0, 4);

  const columns = [
    {
      name: 'Serial',
      selector: 'id',
      sortable: true,
    },
    { name: 'Asset Name', selector: 'assetName', sortable: true },
    { name: 'Requested by', selector: 'requestUser', sortable: true },
    { name: 'Price', selector: 'price', sortable: true },
    { name: 'Asset Type', selector: 'assetType', sortable: true },
    {
      name: 'Image',
      selector: 'assetImage',
      sortable: false,
      cell: row => <img src={row.assetImage} alt="Asset" style={{ maxWidth: '100px' }} />,
    },
    { name: 'Why Needed', selector: 'whyNeedAsset', sortable: true },
    { name: 'Status', selector: 'requestStatus', sortable: true },
    { name: 'Requested Date', selector: 'assetRequestDateString', sortable: true },
  ];

  // Add serial numbers to the data
  const data = sortedData.map((item, index) => ({ ...item, id: index + 1 }));
  // Customize styles
  const customStyles = {

    rows: {
      style: {
        minHeight: '56px', // Override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // Adjust header cell padding
        paddingRight: '8px',
        backgroundColor: '#BE185D',// Change header background color
        color: 'white', 
      },
    },
  };
  return (
    <div className="request-table">
      <DataTable
        title="Latest Asset Requests"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        customRowNumber={(start, rowsPerPage, dataIndex) => dataIndex + 1}
        customStyles={customStyles}
      />
    </div>
  );
};

export default RequestLatestItem;
