export const columns = [
  { field: 'ID', headerName: 'ID', type: 'number', width: 70 },
  { field: 'Sitename', headerName: 'Site name', width: 200, sort: 'asc' },
  { field: 'Email', headerName: 'Email', width: 200 },
  {
    field: 'FullAddress',
    headerName: 'Address',
    width: 400,
    valueGetter: params =>
      `${params.row.Address || ''}, ${params.row.Country || ''}`
  },
  {
    field: 'StartMonth',
    headerName: 'Start month',
    width: 100
  },
  {
    field: 'Regionid',
    headerName: 'Region',
    type: 'number',
    width: 100
  }
]

export const data = [
  {
    id: 1,
    Sitename: 'Selwyn Park',
    Email: 'selwyn@nofacility.com',
    Address: '105 Puriri Park Road',
    Country: 'New Zealand',
    StartMonth: 'January',
    Regionid: 1
  },
  {
    id: 2,
    Sitename: 'Ascot House',
    Email: 'ascot@nofacility.com',
    Address: '185 Vauxhall Road,Auckland, 0624',
    Country: 'New Zealand',
    StartMonth: 'March',
    Regionid: 2
  },
  {
    id: 3,
    Sitename: 'Glenwood Home',
    Email: 'glen@nofacility.com',
    Address: '45 Glenwood Avenue,Timaru',
    Country: 'New Zealand',
    StartMonth: 'October',
    Regionid: 3
  },
  {
    id: 4,
    Sitename: 'Dixon House',
    Email: 'dixon@nofacility.com',
    Address: '6 Brunner Street,Greymouth',
    Country: 'New Zealand',
    StartMonth: 'January',
    Regionid: 4
  },
  {
    id: 5,
    Sitename: 'ABI Wellington',
    Email: 'abi@nofacility.com',
    Address: '4 Chapel Drive, Kenepuru, Porirua',
    Country: 'New Zealand',
    StartMonth: 'April',
    Regionid: 5
  }
]
